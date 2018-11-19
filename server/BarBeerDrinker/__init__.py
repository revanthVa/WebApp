from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database
app = Flask(__name__)

@app.route('/api/bar', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route("/api/bar/<name>", methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("no bar found with given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/bar/<name>/top10spenders", methods=["GET"])
def find_bar_top10spenders(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar_top10spenders(name)
        if bar is None:
            return make_response("no bar found with given name", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/beer/<name>/top10Bars", methods=["GET"])
def find_beer_top10Bars(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.find_beer_top10Bars(name)
        if beer is None:
            return make_response("no beer found with given name", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer', methods=["GET"])
def get_beers():
    return jsonify(database.get_beers())

@app.route("/api/beer/<name>", methods=["GET"])
def find_beer(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.find_beer(name)
        if beer is None:
            return make_response("no beer found with given name.", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/beer/<name>/top10Drinkers", methods=["GET"])
def find_beer_top10Drinkers(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.find_beer_top10Drinkers(name)
        if beer is None:
            return make_response("no beer found with given name", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/bar/<name>/<day>/top10Beers", methods=["GET"])
def find_bar_top10Bars(name, day):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar_top10Beers(name, day)
        if day is None: 
            raise ValueError("Day is not specified.")
        if bar is None:
            return make_response("no bar found with given name", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/beer/<name>/timeDistribution", methods=["GET"])
def find_beer_timeDistribution(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.find_beer_timeDistribution(name)
        if beer is None:
            return make_response("no beer found with given name", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/manf', methods=["GET"])
def get_manf():
    return jsonify(database.get_manf())

@app.route('/api/manf/<name>/top10Regions', methods=["GET"])
def find_manf_region_sales(name):
    try:
        if name is None:
            raise ValueError("Manf is not specified.")
        manf = database.find_manf_region_sales(name)
        if manf is None:
            return make_response("no manf found with given name", 404)
        return jsonify(manf)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/manf/<name>/top10RegionsLikes', methods=["GET"])
def find_manf_region_likes(name):
    try:
        if name is None:
            raise ValueError("Manf is not specified.")
        manf = database.find_manf_region_likes(name)
        if manf is None:
            return make_response("no manf found with given name", 404)
        return jsonify(manf)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/bar/<name>/<day>/timeDistribution", methods=["GET"])
def find_bar_timeDistribution(name, day):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar_timeDistribution(name, day)
        if bar is None:
            return make_response("no bar found with given name", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/bar/<name>/timeDistributionWeek", methods=["GET"])
def find_bar_timeDistributionWeek(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar_timeDistributionWeek(name)
        if bar is None:
            return make_response("no bar found with given name", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/bar/<name>/fractionInventory", methods=["GET"])
def find_bar_fractionInventory(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar_fractionInventory(name)
        if bar is None:
            return make_response("no bar found with given name", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/barAnalytics/<name>/<day>", methods=["GET"])
def find_bar_analytics(name, day):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar_analytics(name, day)
        if bar is None:
            return make_response("no Bar Analytics can be found", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route("/api/beersOnly", methods=["GET"])
def beersOnly():
    beer = database.beersOnly()
    return jsonify(beer)
@app.route('/api/bartender/<name>', methods=["GET"])
def get_bartenders_from_bar(name):
    try:
        if name is None:
            raise ValueError("Bartender is not specified.")
        bartender = database.get_bartenders_from_bar(name)
        if bartender is None:
            return make_response("no bartender found with given name", 404)
        return jsonify(bartender)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/bartendersHours/<name>', methods=["GET"])
def find_bartenders_start_end(name):
    try:
        if name is None:
            raise ValueError("Bartender is not specified.")
        bartender = database.find_bartenders_start_end(name)
        if bartender is None:
            return make_response("no bartender found with given name", 404)
        return jsonify(bartender)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/bartenderAnalytics/<name>/<start>/<end>', methods=["GET"])
def find_bartender_analytics(name, start, end):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bartender = database.find_bartender_analytics(name, start, end)
        if bartender is None:
            return make_response("no bar found with given name", 404)
        return jsonify(bartender)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/sqlquery/<query>', methods=["GET"])
def SQLquery(query):
	try:
		if query is None:
			raise ValueError("Query is not specified")
		illegalOperations = ['create', 'insert', 'update', 'delete', 'drop', 'alter']
		if any(word in query.lower() for word in illegalOperations):
			raise ValueError("Query contains illegal operations")
		result = database.SQLquery(query)
		if result is None:
			return make_response("Query returns nothing", 404)
		return jsonify(result)
	except ValueError as e:
		return make_response(str(e), 400)
	except Exception as e:
		print(str(e))
		return make_response(str(e), 500)
@app.route('/api/bartender/<name>/<bartender>/BartenderSales', methods=['GET'])
def find_bartender_sales(name, bartender):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bartender = database.find_bartender_sales(name, bartender)
        return jsonify(bartender)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/bartendershift/<name>', methods=["GET"])
def get_bartender_shift(name):
    try:
        if name is None:
            raise ValueError("Bartender is not specified.")
        bartender = database.get_bartender_shift(name)
        if bartender is None:
            return make_response("no bartender found with given name", 404)
        return jsonify(bartender)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker', methods=["GET"])
def get_drinkers():
    return jsonify(database.get_drinkers())

@app.route("/api/drinker/<name>", methods=["GET"])
def get_drinker(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.get_drinker(name)
        if drinker is None:
            return make_response("no beer found with given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/drinker/<name>/transacts", methods=["GET"])
def get_drinker_transacts(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.get_drinker_transacts(name)
        if drinker is None:
            return make_response("no drinker found with given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/drinker/<name>/topbeers", methods=["GET"])
def get_drinker_topbeers(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.get_drinker_topbeers(name)
        if drinker is None:
            return make_response("no drinker found with given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/drinker/<name>/spend/<date>", methods=["GET"])
def get_drinker_spending(name, date):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.get_drinker_spending(name, date)
        if drinker is None:
            return make_response("no drinker found with given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/update/<query>', methods=["GET"])
def update_table(query):
        result = database.update_table(query)
        return jsonify(dict(result))