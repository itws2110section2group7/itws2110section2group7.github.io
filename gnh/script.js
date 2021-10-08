class Action {
  constructor(parameter) {
    this._title_item = parameter.title_item;
    this._item = parameter.item;
    this._index = 0;
    this._add_event();
  }
  _add_event() {
    let that = this;
    this._title_item.click(function() {
      let this_index = $(this).attr('data-index');
      if (that._index != this_index) {
        that._item.removeClass('self');
        that._item.eq(this_index).addClass('self');
        that._index = this_index;
      }
    });
  }
}

// Recursively build a menu by calling this function on each menus lists
function buildMenu(output, responseData) {
  // iterate over the menus
  $.each(responseData.menus, function(i, item) {
    output += '<li><a href="' + item.url + '" >' + item.title + '</a>';

    // if the menu item has a submenu then recurse through it
    if (item.menus) {
      output += '<ul class="dropdown">';
      output = buildMenu(output, item);
      output += '</ul>';
    }

    output += '</li>';
  });
  return output;
}

$(document).ready(function() {
  if (window.scrollY <= 500) {
    $(".activity-background img").css("filter", "blur(" + String((window.scrollY) / 10) + "px)");
  } else {
    $(".activity-background img").css("filter", "blur(50px)");
  }

  $(window).scroll(function() {
    if (window.scrollY <= 500) {
      $(".activity-background img").css("filter", "blur(" + String((window.scrollY) / 10) + "px)");
    }
  });

  $("#activity-logo").click(function(event) {
    document.getElementById('activity-slider').scrollIntoView({ behavior: 'smooth' });
  });

  new Action({
    title_item: $('.title'),
    item: $('.item-group')
  });

  var id = new URL(window.location.href).searchParams.get("topic");
  if (id) {
    document.getElementById(id).click();
  }

  // AJAX to build the menu html
  $.ajax({
    type: "GET",
    url: "./data/menu.json",
    dataType: "json",
    success: function(responseData) {
      // start building the ouput
      var output = "<div id='nav-wrapper'><ul class='nav_bar'>";

      // call the recursive menu builder
      output = buildMenu(output, responseData);

      output += "</ul></div>";

      $('.content').prepend(output); // insert the output
    },
    error: function(msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });

  // AJAX to append the footer to the page
  // I used static HTML here since it never changes
  $.ajax({
    type: "GET",
    url: "./data/footer.json",
    dataType: "json",
    success: function(data) {
      // start building the ouput
      var output = "<div class='footer'>";

      $.each(data.cells, function(i, item) {
        output += "<div class='footer-cell'>"
        $.each(item, function(j, link) {
          output += "<a href='" + link.href + "'>" + link.text + "<img alt='" + link.alt + "' src='" + link.img + "' /></a>"
        });
        output += "</div>"
      });

      output += "</div>"

      // append the footer
      // this saves having to repeat this html everywhere
      $("body").append(output);
    },
    error: function(msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
});