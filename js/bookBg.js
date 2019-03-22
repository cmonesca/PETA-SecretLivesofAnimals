// Set book bg to appear or disappear depending on page number

// on first page
$('#peta-book').bind('first', function() {

  console.log("page 1");

	document.getElementById('#petaBookBg').addClass('visibile');

	// document.getElementById('#petaBookBg').attr('background', 'none');
  //
  // document.getElementById('#soundBar').attr('left', '71%');
});


$('#peta-book').turn({
  when: {
    turning: function(event, page, pageObject) {
      if(page===1) {
        $('#peta-book').addClass('visible');
      }
    }
  }
});
