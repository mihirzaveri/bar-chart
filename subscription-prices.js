document.addEventListener("DOMContentLoaded", function(event) {

(function() {
    var prices = [{"Network":"FamilyNet","X2013":0,"label":0,"mobilelabel":0},
{"Network":"HLN","X2013":0,"label":0,"mobilelabel":0},
{"Network":"INSP","X2013":0,"label":0,"mobilelabel":0},
{"Network":"Justice Central. TV","X2013":0,"label":0,"mobilelabel":0},
{"Network":"Mnet","X2013":0,"label":0,"mobilelabel":0},
{"Network":"ReelzChannel","X2013":0,"label":0,"mobilelabel":0},
{"Network":"Resort & Residence","X2013":0,"label":0,"mobilelabel":0},
{"Network":"UP","X2013":0,"label":0,"mobilelabel":0},
{"Network":"CNBC World","X2013":0.01,"label":0,"mobilelabel":0},
{"Network":"BBC World News","X2013":0.02,"label":0,"mobilelabel":0},
{"Network":"GAC","X2013":0.02,"label":0,"mobilelabel":0},
{"Network":"Hallmark Movie Channel","X2013":0.02,"label":0,"mobilelabel":0},
{"Network":"MTV Hits","X2013":0.02,"label":0,"mobilelabel":0},
{"Network":"Nick 2","X2013":0.02,"label":0,"mobilelabel":0},
{"Network":"TVGN","X2013":0.02,"label":0,"mobilelabel":0},
{"Network":"BlueHighways TV","X2013":0.03,"label":0,"mobilelabel":0},
{"Network":"Documentary Channel","X2013":0.03,"label":0,"mobilelabel":0},
{"Network":"Galavision","X2013":0.03,"label":0,"mobilelabel":0},
{"Network":"MTV Jams","X2013":0.03,"label":0,"mobilelabel":0},
{"Network":"Outside Television","X2013":0.03,"label":0,"mobilelabel":0},
{"Network":"Tr3s","X2013":0.03,"label":0,"mobilelabel":0},
{"Network":"ASPiRE","X2013":0.04,"label":0,"mobilelabel":0},
{"Network":"FEARnet","X2013":0.04,"label":0,"mobilelabel":0},
{"Network":"Lifetime Real Women","X2013":0.04,"label":0,"mobilelabel":0},
{"Network":"RFD-TV","X2013":0.04,"label":0,"mobilelabel":0},
{"Network":"Sportsman Channel","X2013":0.04,"label":0,"mobilelabel":0},
{"Network":"Youtoo TV","X2013":0.04,"label":0,"mobilelabel":0},
{"Network":"BET Gospel","X2013":0.05,"label":0,"mobilelabel":0},
{"Network":"CMT Pure Country","X2013":0.05,"label":0,"mobilelabel":0},
{"Network":"Outdoor Channel","X2013":0.05,"label":0,"mobilelabel":0},
{"Network":"Tempo","X2013":0.05,"label":0,"mobilelabel":0},
{"Network":"VH1 Soul","X2013":0.05,"label":0,"mobilelabel":0},
{"Network":"Blackbelt TV","X2013":0.06,"label":0,"mobilelabel":0},
{"Network":"Crime & Investigation Network","X2013":0.06,"label":0,"mobilelabel":0},
{"Network":"C-SPAN","X2013":0.06,"label":1,"mobilelabel":0},
{"Network":"FUSE","X2013":0.06,"label":0,"mobilelabel":0},
{"Network":"H2","X2013":0.06,"label":0,"mobilelabel":0},
{"Network":"Hallmark Channel","X2013":0.06,"label":0,"mobilelabel":0},
{"Network":"LOGO","X2013":0.06,"label":0,"mobilelabel":0},
{"Network":"Military History Channel","X2013":0.06,"label":0,"mobilelabel":0},
{"Network":"mun2","X2013":0.06,"label":0,"mobilelabel":0},
{"Network":"BET Hip-Hop","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"Bloomberg Television","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"Cooking Channel","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"Destination America","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"Discovery Fit & Health","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"Military Channel","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"MTV2","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"mtv-U","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"NuvoTV","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"Ovation","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"RLTV","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"Science","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"The Africa Channel","X2013":0.07,"label":0,"mobilelabel":0},
{"Network":"Canal Sur","X2013":0.08,"label":0,"mobilelabel":0},
{"Network":"CENTRIC","X2013":0.08,"label":0,"mobilelabel":0},
{"Network":"Chiller","X2013":0.08,"label":0,"mobilelabel":0},
{"Network":"Cloo","X2013":0.08,"label":0,"mobilelabel":0},
{"Network":"Nicktoons Network","X2013":0.08,"label":0,"mobilelabel":0},
{"Network":"VH1 Classic","X2013":0.08,"label":0,"mobilelabel":0},
{"Network":"Boomerang","X2013":0.09,"label":0,"mobilelabel":0},
{"Network":"DIY Network","X2013":0.09,"label":0,"mobilelabel":0},
{"Network":"Investigation Discovery","X2013":0.09,"label":0,"mobilelabel":0},
{"Network":"MAVTV","X2013":0.09,"label":0,"mobilelabel":0},
{"Network":"Palladia","X2013":0.09,"label":0,"mobilelabel":0},
{"Network":"PBS KIDS Sprout","X2013":0.09,"label":0,"mobilelabel":0},
{"Network":"Animal Planet","X2013":0.1,"label":0,"mobilelabel":0},
{"Network":"CMT","X2013":0.1,"label":0,"mobilelabel":0},
{"Network":"G4","X2013":0.1,"label":0,"mobilelabel":0},
{"Network":"Lifetime Movie Network","X2013":0.1,"label":0,"mobilelabel":0},
{"Network":"MEXICANAL","X2013":0.1,"label":0,"mobilelabel":0},
{"Network":"Oxygen Network","X2013":0.1,"label":0,"mobilelabel":0},
{"Network":"TV One","X2013":0.1,"label":0,"mobilelabel":0},
{"Network":"Bio","X2013":0.11,"label":0,"mobilelabel":0},
{"Network":"Bridges TV","X2013":0.11,"label":0,"mobilelabel":0},
{"Network":"Current","X2013":0.11,"label":0,"mobilelabel":0},
{"Network":"De PelÌ_cula ClÌÁsico","X2013":0.11,"label":0,"mobilelabel":0},
{"Network":"ShortsHD","X2013":0.11,"label":0,"mobilelabel":0},
{"Network":"Smithsonian Channel","X2013":0.11,"label":0,"mobilelabel":0},
{"Network":"TeenNick","X2013":0.11,"label":0,"mobilelabel":0},
{"Network":"GSN","X2013":0.12,"label":0,"mobilelabel":0},
{"Network":"Nat Geo WILD","X2013":0.12,"label":0,"mobilelabel":0},
{"Network":"truTV","X2013":0.12,"label":0,"mobilelabel":0},
{"Network":"åÁSorpresa!","X2013":0.13,"label":0,"mobilelabel":0},
{"Network":"Bandamax","X2013":0.13,"label":0,"mobilelabel":0},
{"Network":"BBC America","X2013":0.13,"label":0,"mobilelabel":0},
{"Network":"FOX Business Network","X2013":0.13,"label":0,"mobilelabel":0},
{"Network":"The Hub","X2013":0.13,"label":0,"mobilelabel":0},
{"Network":"The Weather Channel","X2013":0.13,"label":1,"mobilelabel":1},
{"Network":"Velocity","X2013":0.13,"label":0,"mobilelabel":0},
{"Network":"WE tv","X2013":0.13,"label":0,"mobilelabel":0},
{"Network":"World Fishing Network","X2013":0.13,"label":0,"mobilelabel":0},
{"Network":"CNN International","X2013":0.14,"label":0,"mobilelabel":0},
{"Network":"GolTV","X2013":0.14,"label":0,"mobilelabel":0},
{"Network":"La Familia Cosmovision","X2013":0.14,"label":0,"mobilelabel":0},
{"Network":"Travel Channel","X2013":0.14,"label":0,"mobilelabel":0},
{"Network":"TV Land","X2013":0.14,"label":0,"mobilelabel":0},
{"Network":"AXS TV","X2013":0.15,"label":0,"mobilelabel":0},
{"Network":"beIN SPORT","X2013":0.15,"label":0,"mobilelabel":0},
{"Network":"The Style Network","X2013":0.15,"label":0,"mobilelabel":0},
{"Network":"TV Colombia","X2013":0.15,"label":0,"mobilelabel":0},
{"Network":"WealthTV","X2013":0.15,"label":0,"mobilelabel":0},
{"Network":"Caracol TV","X2013":0.16,"label":0,"mobilelabel":0},
{"Network":"HGTV","X2013":0.16,"label":0,"mobilelabel":0},
{"Network":"HTV","X2013":0.16,"label":0,"mobilelabel":0},
{"Network":"Universal HD","X2013":0.16,"label":0,"mobilelabel":0},
{"Network":"Univision Deportes Dos","X2013":0.16,"label":0,"mobilelabel":0},
{"Network":"CentroAmerica TV","X2013":0.17,"label":0,"mobilelabel":0},
{"Network":"Disney Junior","X2013":0.17,"label":0,"mobilelabel":0},
{"Network":"Disney XD","X2013":0.17,"label":0,"mobilelabel":0},
{"Network":"LatinoamÌ©rica TelevisiÌ_n","X2013":0.17,"label":0,"mobilelabel":0},
{"Network":"SOAPnet","X2013":0.17,"label":0,"mobilelabel":0},
{"Network":"Comedy Central","X2013":0.18,"label":1,"mobilelabel":1},
{"Network":"Discovery Familia","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"Fox Movie Channel/FX Movies","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"FOX Soccer","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"FUEL TV","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"Sundance Channel","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"Sur Peru","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"Tennis Channel","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"Univision Noticias","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"Univision tlnovelas","X2013":0.18,"label":0,"mobilelabel":0},
{"Network":"De PelÌ_cula","X2013":0.19,"label":0,"mobilelabel":0},
{"Network":"ESPN Deportes","X2013":0.19,"label":0,"mobilelabel":0},
{"Network":"Food Network","X2013":0.19,"label":0,"mobilelabel":0},
{"Network":"History en EspaÌ±ol","X2013":0.19,"label":0,"mobilelabel":0},
{"Network":"Telehit","X2013":0.19,"label":0,"mobilelabel":0},
{"Network":"TV Venezuela","X2013":0.19,"label":0,"mobilelabel":0},
{"Network":"BET","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"Discovery en EspaÌ±ol","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"Ecuavisa","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"ESPN Classic","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"ESPNU","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"Nat Geo Mundo","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"OWN: Oprah Winfrey Network","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"Ritmoson Latino","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"Telefe International","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"TLC","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"TV Chile","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"VH1","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"WGN America","X2013":0.2,"label":0,"mobilelabel":0},
{"Network":"beIN SPORT en EspaÌ±ol","X2013":0.21,"label":0,"mobilelabel":0},
{"Network":"Cartoon Network","X2013":0.21,"label":0,"mobilelabel":0},
{"Network":"ESPNews","X2013":0.21,"label":0,"mobilelabel":0},
{"Network":"Mexico TV","X2013":0.21,"label":0,"mobilelabel":0},
{"Network":"MSNBC","X2013":0.21,"label":1,"mobilelabel":0},
{"Network":"Nick Jr./NickMom","X2013":0.21,"label":0,"mobilelabel":0},
{"Network":"Universal Sports","X2013":0.21,"label":0,"mobilelabel":0},
{"Network":"FOX Deportes","X2013":0.22,"label":0,"mobilelabel":0},
{"Network":"UtilÌ_sima","X2013":0.22,"label":0,"mobilelabel":0},
{"Network":"Independent Film Channel","X2013":0.23,"label":0,"mobilelabel":0},
{"Network":"MLB Network","X2013":0.23,"label":0,"mobilelabel":0},
{"Network":"WAPA-America","X2013":0.23,"label":0,"mobilelabel":0},
{"Network":"Bravo","X2013":0.24,"label":1,"mobilelabel":0},
{"Network":"CBS Sports Network","X2013":0.24,"label":0,"mobilelabel":0},
{"Network":"E! Entertainment Television","X2013":0.24,"label":0,"mobilelabel":0},
{"Network":"National Geographic Channel","X2013":0.24,"label":0,"mobilelabel":0},
{"Network":"Spike TV","X2013":0.25,"label":0,"mobilelabel":0},
{"Network":"History","X2013":0.26,"label":0,"mobilelabel":0},
{"Network":"ABC Family Channel","X2013":0.27,"label":0,"mobilelabel":0},
{"Network":"NBA TV","X2013":0.27,"label":0,"mobilelabel":0},
{"Network":"TyC Sports International Channel","X2013":0.27,"label":0,"mobilelabel":0},
{"Network":"Syfy","X2013":0.28,"label":0,"mobilelabel":0},
{"Network":"A&E","X2013":0.29,"label":0,"mobilelabel":0},
{"Network":"NHL Network","X2013":0.29,"label":0,"mobilelabel":0},
{"Network":"TCM","X2013":0.3,"label":0,"mobilelabel":0},
{"Network":"Univision Deportes","X2013":0.3,"label":0,"mobilelabel":0},
{"Network":"CNBC","X2013":0.31,"label":0,"mobilelabel":0},
{"Network":"Golf Channel","X2013":0.31,"label":0,"mobilelabel":0},
{"Network":"SPEED","X2013":0.31,"label":0,"mobilelabel":0},
{"Network":"Antena 3","X2013":0.32,"label":0,"mobilelabel":0},
{"Network":"Lifetime Television","X2013":0.32,"label":0,"mobilelabel":0},
{"Network":"AMC","X2013":0.33,"label":0,"mobilelabel":0},
{"Network":"NBC Sports Network","X2013":0.33,"label":0,"mobilelabel":0},
{"Network":"Sony Movie Channel","X2013":0.33,"label":0,"mobilelabel":0},
{"Network":"BTN","X2013":0.37,"label":0,"mobilelabel":0},
{"Network":"HDNet Movies","X2013":0.37,"label":0,"mobilelabel":0},
{"Network":"Discovery Channel","X2013":0.38,"label":0,"mobilelabel":0},
{"Network":"FOX College Sports","X2013":0.41,"label":0,"mobilelabel":0},
{"Network":"MTV","X2013":0.43,"label":0,"mobilelabel":0},
{"Network":"MGM HD","X2013":0.47,"label":0,"mobilelabel":0},
{"Network":"FX Network","X2013":0.51,"label":0,"mobilelabel":0},
{"Network":"TBS","X2013":0.59,"label":1,"mobilelabel":0},
{"Network":"CNN","X2013":0.6,"label":0,"mobilelabel":0},
{"Network":"CNN en EspaÌ±ol","X2013":0.6,"label":0,"mobilelabel":0},
{"Network":"Nickelodeon/Nick At Nite","X2013":0.6,"label":0,"mobilelabel":0},
{"Network":"ESPN2","X2013":0.7,"label":1,"mobilelabel":0},
{"Network":"USA","X2013":0.71,"label":0,"mobilelabel":0},
{"Network":"FOX News","X2013":0.94,"label":0,"mobilelabel":0},
{"Network":"Disney Channel","X2013":1.15,"label":0,"mobilelabel":0},
{"Network":"TNT","X2013":1.24,"label":1,"mobilelabel":1},
{"Network":"3net","X2013":1.33,"label":0,"mobilelabel":0},
{"Network":"NFL Network","X2013":1.34,"label":0,"mobilelabel":0},
{"Network":"ESPN 3D","X2013":2.79,"label":0,"mobilelabel":0},
{"Network":"ESPN","X2013":5.54,"label":0,"mobilelabel":0}];

	var margin = {top: 20, right: 100, bottom: 10, left: 0}  ;

	var formatCount = d3.format(",.0f");
    f = d3.format("$.0f"),
    f2 = d3.format("$.2f");

	// --------histogram ---------
	var width = 950 - margin.left - margin.right,
	    height = 600 - margin.top - margin.bottom;

	var y = d3.scale.linear()
	    .range([height, 0]);

  var yAxis = d3.svg.axis()
     .scale(y)
     .tickFormat(f)
     .tickValues([0,1,2,3,4,5])
     .orient("right");

  var bottomyAxis = d3.svg.axis()
     .scale(y)
     .tickValues([0])
     .tickSize(width)
     .orient("right");

  var container = d3.select("#g-histogram")
      .append("div")
      .attr("class", "g-prices-container");

  var svg = container.append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  prices.forEach(function(d) {
  	d.X2013 = +d.X2013;
  })

  y.domain([0, 5.6])

  prices = prices.filter(function(d) { return d.Network !== "ESPN 3D"})

  var x0 = d3.scale.ordinal()
      .domain(prices.map(function(d) { return d.Network}) )
      .rangeBands([0, width], .05);

  var barContainer = svg.append("g");

	var bar = barContainer.selectAll(".bar")
	    .data(prices)
	  .enter().append("g")
	    .attr("class", "bar")
      .classed("g-labeled-rect", function(d) { return d.label == 1; })
      .classed("g-espn-g", function (d) { return d.Network == "ESPN"; })

  bar.append("rect")
      .attr("class", function(d) { return "g-prices-bar" } )
      .attr("x", function(d) { return x0(d.Network); })
      .attr("height", function(d) { return y(0) - y(d.X2013)} )
      .attr("y", function(d) { return y(d.X2013)  })
      .attr("width", Math.round(x0.rangeBand()));

  bar.append("text")
      .attr("id", function(d) { return  d.Network.split(" ").join("-") })
      .text(function(d) { return d.label == 1 ? d.Network + " (" + f2(d.X2013) + ")" : ""})
      .attr("x", function(d) { return x0(d.Network) + 5 ; })
      .attr("y", function(d) { return y(d.X2013) - 4 });

  // manual changes
  d3.select("#g-histogram #Bravo").attr("dx", 10)
      .attr("dy", -4)
      .attr("dx", 39);

  d3.select("#g-histogram #ESPN2")
      .attr("dy", -3)

  d3.select("#g-histogram #TNT")
      .attr("dy", -3)

  d3.select("#g-histogram #Comedy-Central")
      .attr("dx", 19)
      .attr("dy", -3)


  svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + width + ",0)" )
      .call(yAxis);

  svg.append("g")
      .attr("class", "bottomaxis")
      .call(bottomyAxis)
      .attr("class", "y axis bottomaxis");

  // html at the end------------------
  var readin = d3.select("#g-histogram").append("div")
  		.attr("class", "g-hed-chatter")

	readin.append("h2")
			.attr("class", "g-small-hed")
			.text("An Expensive Outlier");

	readin.append("p")
			.attr("class", "g-readin")
			.html('ESPN’s average monthly price is more than four times the monthly fee for the next most expensive national network.');

      readin.append("h5")
      .attr("class", "g-subscription-prices-subhed")
      .text("Cost per pay TV subscriber per month");

  var xtrans = 860;

  d3.select(".g-espn-g").append("text").attr("class", "g-espn-subhed").text("ESPN").attr("x", xtrans ).attr("y", 10);

  d3.select(".g-espn-g").append("text")
      .text(f2(prices.filter(function(d) { return d.Network == "ESPN"})[0].X2013) )
      .attr("x", xtrans )
      .attr("y", 24)
      .attr("class", "g-per-sub");

  d3.select(".g-espn-g").append("text")
      .text("per subscriber" )
      .attr("x", xtrans )
      .attr("y", 37)
      .attr("class", "g-per-sub");

  // d3.select(".g-espn-g").append("text").text("per subscriber").attr("x", 880).attr("y", 43);

  container.append("div")
      .attr("class", "g-prices-source")
      .text("Source: SNL Kagan");


})();

});