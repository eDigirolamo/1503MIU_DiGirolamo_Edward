
var myData = require("JSON");
var phones = myData.devices.phones;

var mainWin = Ti.UI.createWindow({
	title: "Googles Nexus Line"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true,
    height:43,
    bottom:0,
});

var myTable = Ti.UI.createTableView({
	
});

var phoneSection = Ti.UI.createTableViewSection({
	headerTitle: "Current phone"	

});

var tableData = [phoneSection];

for (n in phones){
	
	var myRow = Ti.UI.createTableViewRow({
		backgroundColor:"#fff",
		color: "#000",
		title: phones[n].name,
		hasChild: true
		});
		
	phoneSection.add(myRow);
};

// main code
myTable.setData(tableData);
mainWin.add(myTable, search);
navWin.open();
