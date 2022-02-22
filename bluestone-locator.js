module.exports = {
    'Todo Input': {
        locator: ['.new-todo'],
        screenshot: 'componentPic/Todo_Input.png',
        displayName: 'Todo Input'
    },
    'hello world task': {
        locator: ['//LABEL[text()=\'hello world\']'],
        screenshot: 'componentPic/hello_world_task.png',
        displayName: 'hello world task'
    },
    'Delete Button': {
        locator: ['.destroy'],
        screenshot: 'componentPic/Delete_Button.png',
        displayName: 'Delete Button'
    },
    'Download link': {
        locator: ['p:nth-child(6) > a > strong'],
        screenshot: 'componentPic/Download_link.png',
        displayName: 'Download link'
    },
    'Process Explorer Navigation Item': {
        locator: ['//A[text()=\'Process Explorer\']'],
        screenshot: 'componentPic/Process_Explorer_Navigation_Item.png',
        displayName: 'Process Explorer Navigation Item'
    },
    'Todos Label': {
        locator: ['//H1[text()=\'todos\']'],
        screenshot: 'componentPic/Todos_Label.png',
        displayName: 'Todos Label'
    },
    'Double-click to edit a todo Label': {
        locator: ['(//P)[1]'],
        screenshot: 'componentPic/Double_click_to_edit_a_todo_Label.png',
        displayName: 'Double-click to edit a todo Label'
    },
    'Double-click to edit a todo text': {
        locator: ['//P[text()=\'Double-click to edit a todo\']'],
        screenshot: 'componentPic/Double_click_to_edit_a_todo_text.png',
        displayName: 'Double-click to edit a todo text'
    }
};