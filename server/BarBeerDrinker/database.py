from sqlalchemy import create_engine
from sqlalchemy import sql
from BarBeerDrinker import config

engine = create_engine(config.database_uri)

def get_drinkers():
    with engine.connect() as con:
        rs = con.execute("SELECT name, addr, city, phone, state FROM Drinkers")
        return[dict(row) for row in rs]

def get_drinker(name):
    with engine.connect() as con:
        query = sql.text(
            "Select name, addr, city, phone, state FROM Drinkers WHERE name = :name;"
        )
        rs = con.execute(query, name=name)
        return[dict(row) for row in rs]

def get_drinker_transacts(name):
    with engine.connect() as con:
        query = sql.text(
             "SELECT h1.Drinkersname, h1.BillstransactionID, h1.Barsname, b1.timet FROM Billsnew b1 JOIN Has h1 ON b1.transactionID = h1.BillstransactionID WHERE (h1.Drinkersname = :name)  GROUP BY h1.Barsname ORDER BY str_to_date(b1.timet, '%l:%i %p') desc"
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        return results

def get_drinker_topbeers(name):
    with engine.connect() as con:
        query = sql.text(
             "SELECT b1.name as beername, SUM(bo1.quantity) as quantity FROM Has h1 JOIN Bought bo1 ON bo1.BillstransactionID = h1.BillstransactionID JOIN Beers b1 ON b1.name = bo1.Itemsname  WHERE h1.Drinkersname = :name GROUP BY beername ORDER BY quantity desc LIMIT 10;"
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['quantity'] = float(r['quantity'])
        return results

def get_drinker_spending(name, day):
    with engine.connect() as con:
        query = sql.text(
             "SELECT distinct h.Drinkersname, b.Barsname, b.transactionID, b.timet, b.dayd, b.tip, SUM(b.totalprice) as totalprice FROM Billsnew b, Has h WHERE h.Drinkersname = :name AND b.transactionID = h.BillstransactionID AND dayd = :day GROUP BY b.Barsname ORDER BY totalprice desc;"
        )
        rs = con.execute(query, name=name, day=day)
        results = [dict(row) for row in rs]
        for r in results:
            r['tip'] = float(r['tip'])
            r['totalprice'] = float(r['totalprice'])
        return results
        
def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT name, license, city, phone, addr, state FROM Bars")
        return[dict(row) for row in rs]
def find_bar(name):
    with engine.connect() as con:
        query = sql.text(
            "Select name, license, city, phone ,addr, state FROM Bars WHERE name = :name;"
        )

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)
def find_bar_top10spenders(name):
    with engine.connect() as con:
        query = sql.text(
            " SELECT h1.Drinkersname, bn1.totalprice FROM Billsnew bn1 JOIN Has h1 on bn1.transactionID = h1.BillstransactionID where bn1.Barsname = :name  ORDER BY bn1.totalprice desc  Limit 10;"
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['totalprice'] = float(r['totalprice'])
        return results
def find_bar_top10Beers(name, day):
    with engine.connect() as con:
        query = sql.text("""SELECT beername, sum(quantity) as Quantity
        from (SELECT b1.name as beername, bo1.quantity as quantity
        FROM Beers b1
        JOIN Sells s1 ON b1.name = s1.Itemsname
        JOIN Bought bo1 ON b1.name = bo1.Itemsname
        JOIN Has h1 ON h1.Barsname = s1.Barsname AND bo1.BillstransactionID = h1.BillstransactionID
        JOIN Billsnew bill ON bill.transactionID = h1.BillstransactionID AND bill.Barsname = s1.Barsname
        WHERE s1.Barsname = :name AND bill.dayd = :day) Quantity
        GROUP BY beername
        ORDER by quantity DESC
        LIMIT 10;"""
        )
        rs = con.execute(query, name=name, day=day)
        results = [dict(row) for row in rs]
        for r in results:
            r['Quantity'] = int(r['Quantity'])
        return results
def find_bar_timeDistribution(name, day):
    with engine.connect() as con:
        query = sql.text("""
        SELECT HOUR(str_to_date(timet, '%l:%i %p')) as Hour, COUNT(e.timet) as Quantity
        FROM (SELECT bn1.transactionID as transactionID, bn1.Barsname as bar, bn1.dayd, bo1.Itemsname as item, bn1.timet as timet
        FROM  Billsnew bn1
        JOIN Bought bo1 ON bn1.transactionID = bo1.billstransactionID
        WHERE bn1.Barsname = :name ) as e
        WHERE e.dayd = :day
        GROUP BY Hour
        ORDER BY str_to_date(timet, '%l:%i %p');
        """)
        rs = con.execute(query, name=name, day=day)
        results = [dict(row) for row in rs]
        for r in results:
            r['Quantity'] = int(r['Quantity'])
        return results

def find_bar_timeDistributionWeek(name):
    with engine.connect() as con:
        query = sql.text("""
        SELECT HOUR(str_to_date(timet, '%l:%i %p')) as Hour, COUNT(e.timet) as Quantity
        FROM (SELECT bn1.transactionID as transactionID, bn1.Barsname as bar, bn1.dayd, bo1.Itemsname as item, bn1.timet as timet
        FROM  Billsnew bn1
        JOIN Bought bo1 ON bn1.transactionID = bo1.billstransactionID
        WHERE bn1.Barsname = 'Club No Minors') as e
        GROUP BY Hour
        ORDER BY str_to_date(timet, '%l:%i %p');
        """)
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['Quantity'] = int(r['Quantity'])
        return results

def find_bar_fractionInventory(name):
    with engine.connect() as con:
        query = sql.text("""
        SELECT distinct ab.Dateday, round(((bc.quantity) / (ab.amount) * 100), 2) as fraction
        FROM
        (SELECT st1.Dateday, SUM(st1.amount) as amount
        FROM Stocked st1
        Where st1.Barsname = 'Club No Minors' 
        GROUP by Dateday
        ORDER BY FIELD(Dateday, 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 
        'FRIDAY', 'SATURDAY', 'SUNDAY')) ab,
        (select dayd, sum(quantity) as Quantity
        from (SELECT b1.name as beername, bo1.quantity as quantity, bill.dayd
        FROM Beers b1
        JOIN Sells s1 ON b1.name = s1.Itemsname
        JOIN Bought bo1 ON b1.name = bo1.Itemsname
        JOIN Has h1 ON h1.Barsname = s1.Barsname AND bo1.BillstransactionID = h1.BillstransactionID
        JOIN Billsnew bill ON bill.transactionID = h1.BillstransactionID AND bill.Barsname = s1.Barsname
        WHERE s1.Barsname = 'Club No Minors') Quantity
        GROUP by dayd
        ORDER BY FIELD(dayd, 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 
        'FRIDAY', 'SATURDAY', 'SUNDAY')) bc
        WHERE bc.dayd = ab.Dateday;
        """)
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['fraction'] = float(r['fraction'])
        return results

def find_bar_analytics(name, day):
    with engine.connect() as con:
        query = sql.text("""
        select bar, SUM(quantity) AS Sold
        from (SELECT bn.dayd as dayd, beer.name as beer, bar.name as bar, bo.quantity as quantity
        FROM Sells s
        JOIN Bars bar ON s.Barsname = bar.name
        JOIN Beers beer ON beer.name = s.Itemsname
        JOIN Bought bo ON bo.Itemsname = beer.name
        JOIN Billsnew bn ON bn.transactionID = bo.BillstransactionID AND bn.Barsname = s.Barsname
        WHERE beer.name = :name AND bn.dayd = :day) Sold
        group by bar
        order by Sold desc
        LIMIT 10;
        """)
        rs = con.execute(query, name=name, day=day)
        results = [dict(row) for row in rs]
        for r in results:
            r['Sold'] = int(r['Sold'])
        return results
def get_beers():
    with engine.connect() as con:
        rs = con.execute("Select name, manf from Beers")
        return[dict(row) for row in rs]

def find_beer(name):
    with engine.connect() as con:
        query = sql.text(
            "Select name, manf FROM Beers WHERE name = :name;"
        )
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def find_beer_top10Bars(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT e.Barsname, SUM(e.quantity) as BeersSold FROM (SELECT bo1.BillstransactionID, bo1.quantity, bo1.Itemsname, bn1.Barsname FROM Billsnew bn1 JOIN Bought bo1 ON bo1.BillstransactionID = bn1.transactionID) as e where e.Itemsname = :name GROUP BY Barsname ORDER By BeersSold desc LIMIT 10;"
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['BeersSold'] = float(r['BeersSold'])
        return results

def find_beer_top10Drinkers(name):
     with engine.connect() as con:
        query = sql.text(
            "SELECT h1.Drinkersname, SUM(bo1.quantity) AS amountBought FROM Billsnew bn1 JOIN Bought bo1 ON bo1.BillstransactionID = bn1.transactionID JOIN Has h1 ON h1.BillstransactionID = bn1.transactionID WHERE bo1.Itemsname = :name GROUP BY h1.Drinkersname ORDER BY amountBought desc LIMIT 10;"
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['amountBought'] = int(r['amountBought'])
        return results
def find_beer_timeDistribution(name):
    with engine.connect() as con:
        query = sql.text("""
        select HOUR(str_to_date(timet, '%l:%i %p')) AS Hour, COUNT(timet) as Quantity
        FROM (SELECT bn1.timet as timet
        FROM  Billsnew bn1
        JOIN Bought bo1 ON bn1.transactionID = bo1.billstransactionID
        WHERE bo1.Itemsname = :name
        ORDER BY str_to_date(bn1.timet, '%l:%i %p')) Quantity
        GROUP BY Hour
        ORDER BY str_to_date(timet, '%l:%i %p');

        """)
        rs = con.execute(query, name=name)
        return[dict(row) for row in rs]
        
def get_manf():
    with engine.connect() as con:
        rs = con.execute("Select distinct manf from Beers;")
        return[dict(row) for row in rs]

def find_manf_region_sales(name):
    with engine.connect() as con:
        query = sql.text("""SELECT city, state, SUM(quantity) as sold
        FROM (SELECT beer.manf as manf, bar.city as city, bar.state as state, bo.quantity as quantity
        FROM Beers beer
        JOIN Sells s ON beer.name = s.Itemsname
        JOIN Bars bar ON bar.name = s.Barsname
        JOIN Billsnew bill ON bill.Barsname = s.Barsname
        JOIN Bought bo ON bo.Itemsname = beer.name AND bo.BillstransactionID = bill.transactionID
        WHERE beer.manf = :name ) sold
        GROUP BY city
        order by sold desc
        LIMIT 10;"""
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['sold'] = int(r['sold'])
        return results

def find_manf_region_likes(name):
    with engine.connect() as con:
        query = sql.text("""SELECT drinkers.city, drinkers.state, COUNT(beers.manf) as manfLikes
        FROM Drinkers drinkers
        JOIN Likes likes on likes.Drinkersname = drinkers.name
        JOIN Beers beers on beers.name = likes.Beersname
        WHERE beers.manf = :name
        GROUP by city
        ORDER BY manfLikes desc
        LIMIT 10;"""
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for r in results:
            r['manfLikes'] = int(r['manfLikes'])
        return results

def beersOnly():
    with engine.connect() as con:
        rs = con.execute("SELECT Beers.name FROM Beers")
        return[dict(row) for row in rs]

def get_bartenders_from_bar(name):
    with engine.connect() as con:
        query = sql.text(
            """SELECT *
        FROM Works w1
        WHERE w1.Barsname = :name;"""
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        if results is None:
            return None
        return results

def find_bartenders_start_end(name):
    with engine.connect() as con:
        query = sql.text(""" SELECT distinct w1.start, w1.end FROM Works w1 WHERE w1.Barsname = :name;""")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        if results is None:
            return None
        return results

def find_bartender_analytics(name, start, end):
    with engine.connect() as con:
        query = sql.text("""
        SELECT f.Bartendersname, SUM(e.quantity) as sold
        FROM
        (Select bo1.Itemsname, bn1.transactionID, bn1.timet, bn1.Barsname, bn1.dayd, bo1.quantity
        FROM Beers b1
        JOIN Bought bo1 ON bo1.Itemsname = b1.name
        JOIN Billsnew bn1 ON bn1.transactionID = bo1.BillstransactionID
        WHERE bn1.Barsname = :name) e,
        (Select w1.start, w1.end, w1.Dateday, w1.Bartendersname
        FROM Works w1
        WHERE w1.Barsname = :name AND w1.start = :start AND w1.end = :end) f
        WHERE e.dayd = f.Dateday AND
        (((str_to_date(e.timet, '%l:%i %p')) >= str_to_date(f.start, '%l:%i %p') 
        AND (str_to_date(e.timet, '%l:%i %p') <= str_to_date(f.end, '%l:%i %p')))
        OR
        ((str_to_date(e.timet, '%l:%i %p')) >= str_to_date(f.start, '%l:%i %p') 
        OR (str_to_date(e.timet, '%l:%i %p') <= str_to_date(f.end, '%l:%i %p'))))
        GROUP by f.Bartendersname
        ORDER BY sold desc
        LIMIT 10;"""
        )
        rs = con.execute(query, name=name, start=start, end=end)
        results = [dict(row) for row in rs]
        for r in results:
            r['sold'] = int(r['sold'])
        return results
def SQLquery(sqlquery):
	with engine.connect() as con:
		query = sql.text(sqlquery)
		rs = con.execute(query)
		results = [dict(row) for row in rs]
		for r in results:
			for x in r.keys():
				r[x] = str(r[x])
		return results

def sql_modification(modification):
	with engine.connect() as con:
		mod = sql.text(modification)
		rs = con.execute(mod)
		return dict({'rows': rs.rowcount})

def find_bartender_sales(name, bartender):
    with engine.connect() as con:
        query = sql.text("""
        SELECT e.Itemsname, SUM(e.quantity) as Sold, e.Itemsname, e.dayd, f.Dateday, e.timet 
        FROM
        (Select bo1.Itemsname, bn1.transactionID, bn1.timet, bn1.Barsname, bn1.dayd, bo1.quantity
        FROM Beers b1
        JOIN Bought bo1 ON bo1.Itemsname = b1.name
        JOIN Billsnew bn1 ON bn1.transactionID = bo1.BillstransactionID
        WHERE bn1.Barsname = :name) e,
        (Select w1.start, w1.end, w1.Dateday
        FROM Works w1
        WHERE w1.Bartendersname = :bartender AND w1.Barsname = :name) f
        WHERE e.dayd = f.Dateday AND
        (((str_to_date(e.timet, '%l:%i %p')) >= str_to_date(f.start, '%l:%i %p') 
        AND (str_to_date(e.timet, '%l:%i %p') <= str_to_date(f.end, '%l:%i %p')))
        OR
        ((str_to_date(e.timet, '%l:%i %p')) >= str_to_date(f.start, '%l:%i %p') 
        OR (str_to_date(e.timet, '%l:%i %p') <= str_to_date(f.end, '%l:%i %p'))))
        GROUP by e.Itemsname
        order by Sold desc
        LIMIT 10;"""
        )
        rs = con.execute(query, name=name, bartender=bartender)
        results = [dict(row) for row in rs]
        for r in results:
            r['Sold'] = int(r['Sold'])
        return results

def get_bartender_shift(name):
    with engine.connect() as con:
        query = sql.text(
        """SELECT Dateday, start, end
        FROM Works
        WHERE Bartendersname = :name;"""
        )
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        if results is None:
            return None
        return results