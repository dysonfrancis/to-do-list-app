

function newListItem() {

  //Jquery - Add new item

  let listItem = $('<li></li>');
  let inputValue = $('input').val();
  listItem.append(inputValue);
  $('#list').append(listItem);

  //Jquery clear Input field
  $('input').val('');

  //Jquery Strike through
  function crossOut() {
    listItem.toggleClass('strike');
  }

  listItem.on('dblclick', function crossOut(){
    listItem.toggleClass('strike');
  })

  //jquery - Show 'X' against each list item.
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  listItem.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  function deleteListItem() {
    listItem.addClass('delete');
  }


  $('#list').sortable();
}
