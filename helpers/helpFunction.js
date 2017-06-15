helpers = {
  displayPie : function(data) {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
  },
  
  roleMenu : function(role){
    switch (role) {
      case "Admin":
        let htmlAdmin = `<li><a class="waves-effect" href="/admin">Admin</a></li>
            <li class="no-padding">
              <ul class="collapsible collapsible-accordion">
                <li>
                  <a class="collapsible-header">Dokter<i class="material-icons">arrow_drop_down</i></a>
                  <div class="collapsible-body">
                    <ul>
                      <li><a href="/dokters/add/">Add Data</a></li>
                      <li><a href="/dokters/showTable">Show Table</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
            <li><a class="waves-effect" href="/patients">Patient</a></li>`
        return htmlAdmin;
        break;
      case "Dokter" :
      let htmlDokter  = `<li class="no-padding">
            <ul class="collapsible collapsible-accordion">
              <li>
                <a class="collapsible-header">Dokter<i class="material-icons">arrow_drop_down</i></a>
                <div class="collapsible-body">
                  <ul>
                    <li><a href="/dokters/add/">Add Data</a></li>
                    <li><a href="/dokters/showTable">Show Table</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li><a class="waves-effect" href="/patients">Patient</a></li>`
        return htmlDokter;
        break;
        
      default:    
    }
  }
}

module.exports = helpers
