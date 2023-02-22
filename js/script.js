function newItem() {
    // 1. Adding a new item to the list: 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    // 2. Crossing out an item from the list:
    li.on("dblclick", function () {
        li.toggleClass("strike");
    });

    // 3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", function () {
        li.remove();
    });

    // 4. Reordering the items:
    $('#list').sortable();
}