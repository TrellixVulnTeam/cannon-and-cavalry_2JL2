$(()=>{

  const totalGrids = 16;
  const maxXvalue = 4;
  const maxYvalue = 4;
  var errorPresent = [];
  var battleReport = [];
  var completeStatement = null;

  // This array contains all of the grids and their values
  const allGrids = [
    // rowOneColumnOne
    {
      xValue: 1,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnTwo
    {
      xValue: 2,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnThree
    {
      xValue: 3,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowOneColumnFour
    {
      xValue: 4,
      yValue: 1,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnOne
    {
      xValue: 1,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnTwo
    {
      xValue: 2,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnThree
    {
      xValue: 3,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowTwoColumnFour
    {
      xValue: 4,
      yValue: 2,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnOne
    {
      xValue: 1,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnTwo
    {
      xValue: 2,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnThree
    {
      xValue: 3,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowThreeColumnFour
    {
      xValue: 4,
      yValue: 3,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnOne
    {
      xValue: 1,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnTwo
    {
      xValue: 2,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnThree
    {
      xValue: 3,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    },
    // rowFourColumnFour
    {
      xValue: 4,
      yValue: 4,
      terrain: null,
      cover: null,
      bluePresent: [],
      redPresent: []
    }
  ]

  // Here are the starting values of the blueTeam
  const blueTeam = {
    playerName: "Player 1",
    teamName: "blue",
    infantry: [
      {
        name: "1-5 BN",
        type: "IN",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 1,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null
      }
    ],
    cavalry: [
      {
        name: "2ND RGT",
        type: "CAV",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 2,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null
      }
    ],
    artillery: [
      {
        name: "2-6 BN",
        type: "AR",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 3,
        yValue: 1,
        nextXvalue: null,
        nextYvalue: null
      }
    ]
  };

  // Here are the starting values of the blueTeam
  const redTeam = {
    playerName: "Player 2",
    teamName: "red",
    infantry: [
      {
        name: "2-5 BN",
        type: "IN",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 1,
        yValue: 4
      }
    ],
    cavalry: [
      {
        name: "3RD RGT",
        type: "CAV",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 2,
        yValue: 4
      }
    ],
    artillery: [
      {
        name: "2-7 BN",
        type: "AR",
        active: true,
        health: 10,
        attack: false,
        direction: "center",
        nextDirection: "center",
        xValue: 3,
        yValue: 4
      }
    ]
  };

  // This will compare a single grid to a all of a team's units IOT see if any of those units should be added to the grid's bluePresent or redPresent arrays
  const ifTeamPresent = (gridNumber,oneTeam) => {
    if (oneTeam == blueTeam) {
      for (var i = 0; i < blueTeam.infantry.length; i++) {
        if (allGrids[gridNumber].xValue == blueTeam.infantry[i].xValue && allGrids[gridNumber].yValue == blueTeam.infantry[i].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.infantry[i]);
        } else if (allGrids[gridNumber].xValue == blueTeam.cavalry[i].xValue && allGrids[gridNumber].yValue == blueTeam.cavalry[i].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.cavalry[i]);
        } else if (allGrids[gridNumber].xValue == blueTeam.artillery[i].xValue && allGrids[gridNumber].yValue == blueTeam.artillery[i].yValue) {
          allGrids[gridNumber].bluePresent.push(blueTeam.artillery[i]);
        };
      }
    } else if (oneTeam == redTeam) {
      for (var i = 0; i < redTeam.infantry.length; i++) {
        if (allGrids[gridNumber].xValue == redTeam.infantry[i].xValue && allGrids[gridNumber].yValue == redTeam.infantry[i].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.infantry[i]);
        } else if (allGrids[gridNumber].xValue == redTeam.cavalry[i].xValue && allGrids[gridNumber].yValue == redTeam.cavalry[i].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.cavalry[i]);
        } else if (allGrids[gridNumber].xValue == redTeam.artillery[i].xValue && allGrids[gridNumber].yValue == redTeam.artillery[i].yValue) {
          allGrids[gridNumber].redPresent.push(redTeam.artillery[i]);
        };
      }
    }
  };

  // Now that one grid can recieve one present units, this function can carry that out for ALL of the grids
  const unitsInAllGrids = () =>{
    for (var i = 0; i < allGrids.length; i++) {
      ifTeamPresent(i,blueTeam);
      ifTeamPresent(i,redTeam);
    }
  };

  unitsInAllGrids();
  console.log(allGrids)

  // The blueTeam starts by default
  var currentPlayer = blueTeam;

  // To display all of a team's units
  const infantryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.infantry.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueIn" + i;
        var unitName = blueTeam.infantry[i].name;
        $(box).css('background-color','blue').text(unitName);
        displayTeam.infantry[i].columnNum = i
      } else {
        var box = "#redIn" + i;
        var unitName = redTeam.infantry[i].name;
        $(box).css('background-color','red').text(unitName);
        displayTeam.infantry[i].columnNum = i
      };
    };
  };
  infantryColumn(blueTeam);
  infantryColumn(redTeam);

  const artilleryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.artillery.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueAr" + i;
        var unitName = blueTeam.artillery[i].name;
        $(box).css('background-color','blue').text(unitName);
        displayTeam.artillery[i].columnNum = i
      } else {
        var box = "#redAr" + i;
        var unitName = redTeam.artillery[i].name;
        $(box).css('background-color','red').text(unitName);
        displayTeam.artillery[i].columnNum = i
      };
    };
  };
  artilleryColumn(blueTeam);
  artilleryColumn(redTeam);

  const cavalryColumn = (displayTeam) =>{
    for (var i = 0; i < displayTeam.cavalry.length; i++) {
      if (displayTeam == blueTeam) {
        var box = "#blueCav" + i;
        var unitName = blueTeam.cavalry[i].name;
        $(box).css('background-color','blue').text(unitName);
        displayTeam.cavalry[i].columnNum = i
      } else {
        var box = "#redCav" + i;
        var unitName = redTeam.cavalry[i].name;
        $(box).css('background-color','red').text(unitName);
        displayTeam.cavalry[i].columnNum = i
      };
    };
  };
  cavalryColumn(blueTeam);
  cavalryColumn(redTeam);

  // The default settings for a selectedUnit
  var selectedUnit = null;
  var selectedInfantry = null;
  var selectedAttack = false;

  // This connects the attackButton in HTML with the selectedUnit's attack mode
  $('#attackButton').click( ()=> {
    selectedUnit.attack = true;
    $('#attackButton').css('background-color','blue').css('color','white');
    $('#defendButton').css('background-color','white').css('color','black');
    console.log("Attack mode");
  });

  // This connects the defendButton in HTML with the selectedUnit's attack mode
  $('#defendButton').click( ()=> {
    selectedUnit.attack = false;
    $('#attackButton').css('background-color','white').css('color','black');
    $('#defendButton').css('background-color','red').css('color','white');
    console.log("Defense mode");
  })

  //This function makes the arrows show the selectedUnit's NEXT direction
  const showUnitDirection = ()=> {
    if (selectedUnit.direction == "north") {
      $("#north").css('background-color','grey');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
      $("#center").css('background-color','white');
    } else if (selectedUnit.direction == "east") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','grey');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
      $("#center").css('background-color','white');
    } else if (selectedUnit.direction == "south") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','grey');
      $("#west").css('background-color','white');
      $("#center").css('background-color','white');
    } else if (selectedUnit.direction == "west") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','grey');
      $("#center").css('background-color','white');
    } else if (selectedUnit.direction == "center") {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
      $("#center").css('background-color','grey');
    } else {
      $("#north").css('background-color','white');
      $("#east").css('background-color','white');
      $("#south").css('background-color','white');
      $("#west").css('background-color','white');
      $("#center").css('background-color','white');
    };
  }

  // Here is the function that displays the selectedUnit's CURRENT direction
  const showUnitNextDirection = ()=> {
    if (selectedUnit.nextDirection == "north") {
      $("#north").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "east") {
      $("#east").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "south") {
      $("#south").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "west") {
      $("#west").css('background-color','yellow');
    } else if (selectedUnit.nextDirection == "center") {
      $("#center").css('background-color','yellow');
    }  else {
      console.log("error in showUnitDirection function.")
    }
  }

// This is how the arrow buttons change a unit's nextDirections

  $('#north').click( ()=> {
    selectedUnit.nextDirection = "north";
    console.log("Direction: " + selectedUnit.nextDirection);
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#east').click( ()=> {
    selectedUnit.nextDirection = "east";
    console.log("Direction: " + selectedUnit.nextDirection)
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#south').click( ()=> {
    selectedUnit.nextDirection = "south";
    console.log("Direction: " + selectedUnit.nextDirection)
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#west').click( ()=> {
    selectedUnit.nextDirection = "west";
    console.log("Direction: " + selectedUnit.nextDirection)
    showUnitDirection();
    showUnitNextDirection();
  });
  $('#center').click( ()=> {
    selectedUnit.nextDirection = "center";
    console.log("Direction: " + selectedUnit.nextDirection)
    showUnitDirection();
    showUnitNextDirection();
  });

// To be used within issueOneOrder below, this determines the grid where the unit will be moved to. It's important because both the unit and the grid square need to know that the unit is in a new grid square.
  const findNextGrid = () => {
    for (var a = 0; a < totalGrids; a++) {
      if (selectedUnit.nextXvalue == allGrids[a].xValue && selectedUnit.nextYvalue == allGrids[a].yValue) {
        nextGrid = allGrids[a];
        return nextGrid
      }
    }
  }

  // Like findCurrentGrid, this finds the old grid so that the unit can be REMOVED from it's bluePresent or redPresent
  const findCurrentGrid = () => {
    for (var b = 0; b < totalGrids; b++) {
      if (selectedUnit.xValue == allGrids[b].xValue && selectedUnit.yValue == allGrids[b].yValue) {
        currentGrid = allGrids[b];
        return currentGrid
      }
    }
  }

  // After the moved unit is added to the nextGrid, this function removes it from the currentGrid.
  const removeAbsentUnit = () =>{
    if (currentPlayer == blueTeam) {
      for (var c = 0; c < currentGrid.bluePresent.length; c++) {
        if (selectedUnit.xValue == currentGrid.xValue && selectedUnit.yValue == currentGrid.yValue && currentGrid.redPresent.length == 0) {
          var removedUnit = currentGrid.bluePresent[c];
          var removedID = "#x" + removedUnit.xValue + "y" + removedUnit.yValue;
          if (removedUnit.direction == "north") {
            removedIDnorth = removedID + "_north";
            $(removedIDnorth).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "east") {
            removedIDeast = removedID + "_east";
            $(removedIDeast).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "south") {
            removedIDsouth = removedID + "_south";
            $(removedIDsouth).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "west") {
            removedIDwest = removedID + "_west";
            $(removedIDwest).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "center") {
            removedIDcenter = removedID + "_center";
            $(removedIDcenter).text("").css('background-color','transparent').css('color','transparent');
          } else {
            console.log("Error in direction if loop")
          };
          currentGrid.bluePresent.splice(c, 1);
        } else {
          console.log("Error in removeAbsentUnit's blueTeam")
        }
      }
    } else if (currentPlayer == redTeam) {
      for (var c = 0; c < currentGrid.redPresent.length; c++) {
        if (selectedUnit.xValue == currentGrid.xValue && selectedUnit.yValue == currentGrid.yValue && currentGrid.bluePresent.length == 0) {
          var removedUnit = currentGrid.redPresent[c];
          var removedID = "#x" + removedUnit.xValue + "y" + removedUnit.yValue;
          if (removedUnit.direction == "north") {
            removedIDnorth = removedID + "_north";
            $(removedIDnorth).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "east") {
            removedIDeast = removedID + "_east";
            $(removedIDeast).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "south") {
            removedIDsouth = removedID + "_south";
            $(removedIDsouth).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "west") {
            removedIDwest = removedID + "_west";
            $(removedIDwest).text("").css('background-color','transparent').css('color','transparent');
          } else if (removedUnit.direction == "center") {
            removedIDcenter = removedID + "_center";
            $(removedIDcenter).text("").css('background-color','transparent').css('color','transparent');
          } else {
            console.log("Error in direction if loop")
          };
          currentGrid.redPresent.splice(c, 1)
        } else {
          console.log("Error in removeAbsentUnit's redTeam")
        }
      }
    } else {
      console.log("removeAbsentUnit couldn't find the currentPlayer")
    }
  };

// This determines a) if a unit is going to move and b) where it's new location will be
  const issueOneOrder = () => {
    if (selectedUnit.attack == true) {
      // something will be needed here to checks for water @ next grid
      // something here will block this unit from moving if the nextGrid already has a friend unit there
      if (selectedUnit.nextDirection == "north" && selectedUnit.yValue > 1) {
        showBattleReport(selectedUnit);
        selectedUnit.nextXvalue = selectedUnit.xValue;
        selectedUnit.nextYvalue = selectedUnit.yValue - 1;
        var nextGrid = findNextGrid();
        var currentGrid = findCurrentGrid();
        if (currentPlayer == blueTeam) {
          nextGrid.bluePresent.push(selectedUnit);
        } else if (currentPlayer == redTeam) {
          nextGrid.redPresent.push(selectedUnit);
        };
        removeAbsentUnit();
      } else if (selectedUnit.nextDirection == "east" && selectedUnit.xValue < maxXvalue) {
        showBattleReport(selectedUnit);
        selectedUnit.nextXvalue = selectedUnit.xValue + 1;
        selectedUnit.nextYvalue = selectedUnit.yValue;
        var nextGrid = findNextGrid();
        var currentGrid = findCurrentGrid();
        if (currentPlayer == blueTeam) {
          nextGrid.bluePresent.push(selectedUnit);
        } else if (currentPlayer == redTeam) {
          nextGrid.redPresent.push(selectedUnit);
        };
        removeAbsentUnit();
      } else if (selectedUnit.nextDirection == "south" && selectedUnit.yValue < maxYvalue) {
        showBattleReport(selectedUnit);
        selectedUnit.nextXvalue = selectedUnit.xValue;
        selectedUnit.nextYvalue = selectedUnit.yValue + 1;
        var nextGrid = findNextGrid();
        var currentGrid = findCurrentGrid();
        if (currentPlayer == blueTeam) {
          nextGrid.bluePresent.push(selectedUnit);
        } else if (currentPlayer == redTeam) {
          nextGrid.redPresent.push(selectedUnit);
        };
        removeAbsentUnit();
      } else if (selectedUnit.nextDirection == "west" && selectedUnit.xValue > 1) {
        showBattleReport(selectedUnit);
        selectedUnit.nextXvalue = selectedUnit.xValue - 1;
        selectedUnit.nextYvalue = selectedUnit.yValue;
        var nextGrid = findNextGrid();
        var currentGrid = findCurrentGrid();
        if (currentPlayer == blueTeam) {
          nextGrid.bluePresent.push(selectedUnit);
        } else if (currentPlayer == redTeam) {
          nextGrid.redPresent.push(selectedUnit);
        };
        removeAbsentUnit();
      } else {
        showBattleReport(selectedUnit);
        selectedUnit.nextXvalue = selectedUnit.xValue;
        selectedUnit.nextYvalue = selectedUnit.yValue;
        errorPresent.push(selectedUnit);
      };
    } else if (selectedUnit.attack == false) {
      var currentGrid = findCurrentGrid();
      var nextGrid = currentGrid;
      var currentDirection = selectedUnit.direction;
      var currentID = "#x" + currentGrid.xValue + "y" + currentGrid.yValue + "_" + currentDirection;
      $(currentID).text("").css("background-color","transparent");
      selectedUnit.direction = selectedUnit.nextDirection;
      selectedUnit.nextXvalue = currentGrid.xValue;
      selectedUnit.nextYvalue = currentGrid.yValue;
      showBattleReport(selectedUnit);
    } else {
      console.log("An error occurred in issueOneOrder.");
    };
  };

  // This function takes place in issueAllOrders to see if a unit's orders are an error and, if so, resets that unit's values.
  const checkIfError = (unitToCheck) => {
    for (var i = 0; i < errorPresent.length; i++) {
      if (unitToCheck == errorPresent[i]) {
        console.log("The order for " + errorPresent[i].name + " could not be carried out.");
        errorPresent[i].nextDirection = "center";
        errorPresent[i].nextXvalue = null;
        errorPresent[i].nextYvalue = null;
      }
    }
  };

  // In this, a unit's the values of "xValue", "yValue", and "direction" are all changed to their "next" partner's values, and the "nextValues" are now null.
  const changeCurrentValues = () => {
    if (selectedUnit.nextXvalue != null && selectedUnit.nextYvalue != null) {
      selectedUnit.xValue = selectedUnit.nextXvalue;
      selectedUnit.yValue = selectedUnit.nextYvalue;
    };
    selectedUnit.nextXvalue = null;
    selectedUnit.nextYvalue = null;
    if (selectedUnit.attack == true) {
      selectedUnit.direction = "center";
      selectedUnit.nextDirection = "center";
      selectedUnit.attack = false;
    };
  };

  const showBattleReport = (unitReport) => {
    if (unitReport.attack == true) {
      var attackOrder = "The " + unitReport.name + " marches to the " + unitReport.nextDirection + ". ";
      battleReport.push(attackOrder);
    } else {
      var defendOrder = "The " + unitReport.name + " defends to the " + unitReport.direction + ". "
      battleReport.push(defendOrder);
    };
  };

  const completeReport = () => {
    completeStatement = battleReport[0];
    for (var i = 1; i < battleReport.length; i++) {
      completeStatement += battleReport[i];
    };
    // console.log(completeStatement);
  }

  const issueAllOrders = () => {
    selectedInfantry = currentPlayer.infantry;
    selectedCavalry = currentPlayer.cavalry;
    selectedArtillery = currentPlayer.artillery;
    for (var i = 0; i < selectedInfantry.length; i++) {
      selectedUnit = selectedInfantry[i];
      issueOneOrder();
    };
    for (var i = 0; i < selectedCavalry.length; i++) {
      selectedUnit = currentPlayer.cavalry[i];
      issueOneOrder();
    };
    for (var i = 0; i < selectedArtillery.length; i++) {
      selectedUnit = currentPlayer.artillery[i];
      issueOneOrder();
    };

    // Insert the battle function here

    // console.log(battleReport);
    completeReport();
    $("#completeReport").text(completeStatement);
    console.log("If any of your orders could not be carried it, they will be reported below: ");
    for (var i = 0; i < selectedInfantry.length; i++) {
      selectedUnit = selectedInfantry[i];
      checkIfError(selectedUnit);
      changeCurrentValues();
    };
    for (var i = 0; i < selectedCavalry.length; i++) {
      selectedUnit = selectedCavalry[i];
      checkIfError(selectedUnit);
      changeCurrentValues();
    };
    for (var i = 0; i < currentPlayer.artillery.length; i++) {
      selectedUnit = selectedArtillery[i];
      checkIfError(selectedUnit);
      changeCurrentValues();
    };
    // here is where a border should be added to the new currentPlayer's box
    errorPresent = [];
    showGridUnits(currentPlayer, selectedInfantry);
    showGridUnits(currentPlayer, selectedCavalry);
    showGridUnits(currentPlayer, selectedArtillery);
    battleReport = [];
    if (currentPlayer == blueTeam) {
      currentPlayer = redTeam;
    } else if (currentPlayer == redTeam) {
      currentPlayer = blueTeam;
    };
    console.log("It is now the " + currentPlayer.teamName + " team's turn.");
    removeAllColors();
    console.log(allGrids);
  };

  $('#ordersButton').click(issueAllOrders);

  // This displays the selected unit's values
  const selectedValues = () =>{
    console.log("Unit: " + selectedUnit.name);
    $("#unitName").text(selectedUnit.name);
    if (selectedUnit.attack == true) {
      $("#attackButton").css('color','white').css('background-color','blue');
      $("#defendButton").css('color','black').css('background-color','white');
    } else {
      $("#attackButton").css('color','black').css('background-color','white');
      $("#defendButton").css('color','white').css('background-color','red');
    };
    $("#healthReading").text(selectedUnit.health);
    showUnitDirection();
  };

  var gridAndDirection = null;
  const allDirections = ["_north", "_east", "_south", "_west", "_center"];

  // This will reset all of the text color after a) a new unit is selected or b) all of the orders have been issued
  const removeAllColors = () => {
    for (var d = 0; d < allGrids.length; d++) {
      var coordinates = "#x" + allGrids[d].xValue + "y" + allGrids[d].yValue;
      for (var e = 0; e < allDirections.length; e++) {
        var removeColorHere = coordinates + allDirections[e];
        if (allGrids[d].bluePresent.length > 0) {
          $(removeColorHere).css('color','white');
        } else if (allGrids[d].redPresent.length > 0) {
          $(removeColorHere).css('color','black');
        } else {
          $(removeColorHere).css('color','transparent');
        }
      }
    }
  };

  // This is where you start to select a unit
  var clickNum = null;

  const newClickNum = (num) => {
    clickNum = num.data;
  }
  // ------ INFANTRY --------
  const infantryNumSelect = () =>{
    selectedUnit = currentPlayer.infantry[clickNum];
    removeAllColors();
    gridAndDirection = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_" + selectedUnit.direction;
    $(gridAndDirection).css('color','orange');
    selectedValues();
  };

  $("#blueIn0").click(0, newClickNum).click(infantryNumSelect);
  $("#blueIn1").click(1, newClickNum).click(infantryNumSelect);
  $("#blueIn2").click(2, newClickNum).click(infantryNumSelect);
  $("#blueIn3").click(3, newClickNum).click(infantryNumSelect);
  $("#blueIn4").click(4, newClickNum).click(infantryNumSelect);

  $("#redIn0").click(0, newClickNum).click(infantryNumSelect);
  $("#redIn1").click(1, newClickNum).click(infantryNumSelect);
  $("#redIn2").click(2, newClickNum).click(infantryNumSelect);
  $("#redIn3").click(3, newClickNum).click(infantryNumSelect);
  $("#redIn4").click(4, newClickNum).click(infantryNumSelect);

  // ------ CAVALRY --------
  const cavalryNumSelect = () =>{
    selectedUnit = currentPlayer.cavalry[clickNum];
    removeAllColors();
    gridAndDirection = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_" + selectedUnit.direction;
    $(gridAndDirection).css('color','orange');
    selectedValues();
  };

  $("#blueCav0").click(0, newClickNum).click(cavalryNumSelect);
  $("#blueCav1").click(1, newClickNum).click(cavalryNumSelect);
  $("#blueCav2").click(2, newClickNum).click(cavalryNumSelect);
  $("#blueCav3").click(3, newClickNum).click(cavalryNumSelect);
  $("#blueCav4").click(4, newClickNum).click(cavalryNumSelect);

  $("#redCav0").click(0, newClickNum).click(cavalryNumSelect);
  $("#redCav1").click(1, newClickNum).click(cavalryNumSelect);
  $("#redCav2").click(2, newClickNum).click(cavalryNumSelect);
  $("#redCav3").click(3, newClickNum).click(cavalryNumSelect);
  $("#redCav4").click(4, newClickNum).click(cavalryNumSelect);

  // ------ ARTILLERY --------
  const artilleryNumSelect = () =>{
    selectedUnit = currentPlayer.artillery[clickNum];
    removeAllColors();
    gridAndDirection = "#x" + selectedUnit.xValue + "y" + selectedUnit.yValue + "_" + selectedUnit.direction;
    $(gridAndDirection).css('color','orange');
    selectedValues();
  };

  $("#blueAr0").click(0, newClickNum).click(artilleryNumSelect);
  $("#blueAr1").click(1, newClickNum).click(artilleryNumSelect);
  $("#blueAr2").click(2, newClickNum).click(artilleryNumSelect);
  $("#blueAr3").click(3, newClickNum).click(artilleryNumSelect);
  $("#blueAr4").click(4, newClickNum).click(artilleryNumSelect);

  $("#redAr0").click(0, newClickNum).click(artilleryNumSelect);
  $("#redAr1").click(1, newClickNum).click(artilleryNumSelect);
  $("#redAr2").click(2, newClickNum).click(artilleryNumSelect);
  $("#redAr3").click(3, newClickNum).click(artilleryNumSelect);
  $("#redAr4").click(4, newClickNum).click(artilleryNumSelect);

  // This will show all of the units in their current grid squares. It is run inside of the "makeOneGrid" and "issueAllOrders" functions.
  const showGridUnits = (oneTeam, unitType) => {
    for (var x = 0; x < totalGrids; x++) {
      var currentGrid = x;
      var gridID = "#x" + allGrids[currentGrid].xValue + "y" + allGrids[currentGrid].yValue;
      var gridIDnorth = gridID + "_north";
      var gridIDeast = gridID + "_east";
      var gridIDsouth = gridID + "_south";
      var gridIDwest = gridID + "_west";
      var gridIDcenter = gridID + "_center";
      for (var i = 0; i < unitType.length; i++) {
        if (unitType[i].xValue == allGrids[currentGrid].xValue && unitType[i].yValue == allGrids[currentGrid].yValue) {
          if (unitType[i].direction == "north") {
            $(gridIDnorth).text("IN");
            if (oneTeam == blueTeam) {
              $(gridIDnorth).css('color','white').css('background-color','blue');
            } else if (oneTeam == redTeam) {
              $(gridIDnorth).css('color','black').css('background-color','red');
            } else {
              console.log("Error ")
            };
          } else if (unitType[i].direction == "east") {
            $(gridIDeast).text("IN");
            if (oneTeam == blueTeam) {
              $(gridIDeast).css('color','white').css('background-color','blue');
            } else if (oneTeam == redTeam) {
              $(gridIDeast).css('color','black').css('background-color','red');
            } else {
              console.log("Error ")
            };
          } else if (unitType[i].direction == "south") {
            $(gridIDsouth).text("IN");
            if (oneTeam == blueTeam) {
              $(gridIDsouth).css('color','white').css('background-color','blue');
            } else if (oneTeam == redTeam) {
              $(gridIDsouth).css('color','black').css('background-color','red');
            } else {
              console.log("Error ")
            };
          } else if (unitType[i].direction == "west") {
            $(gridIDwest).text("IN");
            if (oneTeam == blueTeam) {
              $(gridIDwest).css('color','white').css('background-color','blue');
            } else if (oneTeam == redTeam) {
              $(gridIDwest).css('color','black').css('background-color','red');
            } else {
              console.log("Error ")
            };
          } else if (unitType[i].direction == "center") {
            $(gridIDcenter).text("IN");
            if (oneTeam == blueTeam) {
              $(gridIDcenter).css('color','white').css('background-color','blue');
            } else if (oneTeam == redTeam) {
              $(gridIDcenter).css('color','black').css('background-color','red');
            } else {
              console.log("Error ")
            };
          } else {
            console.log("No direction")
          }
        }
      };
      for (var i = 0; i < oneTeam.cavalry.length; i++) {
        // console.log("cavalry for loop: " + i);
        if (oneTeam.cavalry[i].xValue == allGrids[currentGrid].xValue && oneTeam.cavalry[i].yValue == allGrids[currentGrid].yValue) {
          if (oneTeam.cavalry[i].direction == "north") {
            $(gridIDnorth).text("CAV");
          } else if (oneTeam.cavalry[i].direction == "east") {
            $(gridIDeast).text("CAV");
          } else if (oneTeam.cavalry[i].direction == "south") {
            $(gridIDsouth).text("CAV");
          } else if (oneTeam.cavalry[i].direction == "west") {
            $(gridIDwest).text("CAV");
          } else if (oneTeam.cavalry[i].direction == "center") {
            $(gridIDcenter).text("CAV");
          } else {
            console.log("No direction")
          }
        }
      };
      for (var i = 0; i < oneTeam.artillery.length; i++) {
        // console.log("artillery for loop: " + i);
        if (oneTeam.artillery[i].xValue == allGrids[currentGrid].xValue && oneTeam.artillery[i].yValue == allGrids[currentGrid].yValue) {
          if (oneTeam.artillery[i].direction == "north") {
            $(gridIDnorth).text("AR");
          } else if (oneTeam.artillery[i].direction == "east") {
            $(gridIDeast).text("AR");
          } else if (oneTeam.artillery[i].direction == "south") {
            $(gridIDsouth).text("AR");
          } else if (oneTeam.artillery[i].direction == "west") {
            $(gridIDwest).text("AR");
          } else if (oneTeam.artillery[i].direction == "center") {
            $(gridIDcenter).text("AR");
          } else {
            console.log("No direction")
          }
        }
      }
    };
    // console.log("End showGridUnits function");
  };

  // This function will generate random values for a grid and give it the correct CSS settings
  const makeOneGrid = (gridNumber) => {
    // console.log("start makeOneGrid function: " + gridNumber);
    const pickTerrain = () => {
      const pickValue = Math.random();
      if (pickValue < 0.3) {
        allGrids[gridNumber].terrain = "woods"
      } else if (pickValue >= 0.3 && pickValue < 0.4) {
        allGrids[gridNumber].terrain = "hill"
      } else if (pickValue >= 0.4 && pickValue < 0.5) {
        allGrids[gridNumber].terrain = "water"
      } else if (pickValue >= 0.5 && pickValue < 1) {
        allGrids[gridNumber].terrain = "field"
      } else {
        console.log("Error in pickTerrain's pickValue")
      };
      // console.log("pickTerrain is functioning.");
    };
    pickTerrain();
    const pickCover = () => {
      const pickValue = Math.random();
      if (pickValue < 0.2) {
        allGrids[gridNumber].cover = "heavy"
      } else if (pickValue >= 0.2 && pickValue < 0.8) {
        allGrids[gridNumber].cover = "light"
      } else if (pickValue >= 0.8 && pickValue < 1) {
        allGrids[gridNumber].cover = "none"
      } else {
        console.log("Error in pickCover's pickValue")
      };
      // console.log("pickCover is functioning.");
    };
    pickCover();
    var gridID = "#x" + allGrids[gridNumber].xValue + "y" + allGrids[gridNumber].yValue;
    const coverImage = () => {
      if (allGrids[gridNumber].cover == "heavy") {
        $(gridID).css('background-color','green')
      } else if (allGrids[gridNumber].cover == "light") {
        $(gridID).css('background-color','lightgreen')
      } else if (allGrids[gridNumber].cover == "none") {
        $(gridID).css('background-color','orange')
      } else {
        console.log("Error in coverImage")
      };
      // console.log("coverImage is functioning.");
    };
    coverImage();
    const terrainImage = () => {
      var gridIDcenter = gridID + "_center";
      if (allGrids[gridNumber].terrain == "woods") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/forest.png")')
      } else if (allGrids[gridNumber].terrain == "hill") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/hill_noBackground.png")')
      } else if (allGrids[gridNumber].terrain == "water") {
        $(gridIDcenter).css('background-image','url("stylesheets/images/pond_noBackground.png")')
      } else if (allGrids[gridNumber].terrain == "field") {
        // No terrain image necessary here.
      } else {
        console.log("Error in terrainImage function.")
      };
      // console.log("terrainImage is functioning.");
    };
    terrainImage();
    showGridUnits(blueTeam, blueTeam.infantry);
    showGridUnits(blueTeam, blueTeam.cavalry);
    showGridUnits(blueTeam, blueTeam.artillery);
    showGridUnits(redTeam, redTeam.infantry);
    showGridUnits(redTeam, redTeam.cavalry);
    showGridUnits(redTeam, redTeam.artillery);
    // console.log("End makeOneGrid function: " + gridNumber);
  };

  // This uses the "makeOneGrid" function to give values to ALL of the grid squares
  const makeAllGrids = (howMany) => {
    // console.log("Start makeAllGrids function");
    for (var i = 0; i < howMany; i++) {
      makeOneGrid(i);
      // console.log(allGrids[i]);
    };
    // console.log("End makeAllGrids function");
  };
  makeAllGrids(totalGrids);

})
