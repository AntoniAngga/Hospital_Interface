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
  },
  datecovertion : function (Tanggal) {
    var d = new Date(Tanggal);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var m_names = new Array("Jan", "Feb", "Mar", 
    "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
    "Oct", "Nov", "Dec");
    
    var day = weekday[d.getDay()];
    var date = d.getDate();
    var month = m_names[d.getMonth()];
    var year = d.getFullYear();
    var time = d.toTimeString().slice(0,5);
    
    return `${day}, ${date} ${month} ${year}`;
  }
}

module.exports = helpers
