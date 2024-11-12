function monitorCount(rows, columns){
    return rows * columns;
  }
    const numOfMonitors = monitorCount(rows = 5, columns = 4);
     console.log(numOfMonitors);


     //Helper Functions
  
     function monitorCount(rows, columns) {
        return rows * columns;
      }
      
      function costOfMonitors(rows, columns){
        return monitorCount(rows, columns) * 200
      }
      const totalCost = costOfMonitors(5, 4);
      console.log(totalCost);  