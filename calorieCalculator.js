var caloriesPerDay = [0, 0, 0, 0, 0, 0, 0]

var idealDailyCalories = parseInt(prompt('Please enter how many calories you would like to consume on average per day'), 10)
caloriesPerDay[0] = parseInt(prompt('Enter calories for Monday'), 10)
caloriesPerDay[1] = parseInt(prompt('Enter calories for Tuesday'), 10)
caloriesPerDay[2] = parseInt(prompt('Enter calories for Wednesday'), 10)
caloriesPerDay[3] = parseInt(prompt('Enter calories for Thursday'), 10)
caloriesPerDay[4] = parseInt(prompt('Enter calories for Friday'), 10)
caloriesPerDay[5] = parseInt(prompt('Enter calories for Saturday'), 10)
caloriesPerDay[6] = parseInt(prompt('Enter calories for Sunday'), 10)

alert("You've consumed " + getTotalCalories() + " calories this week.")

calculateHealthPlan()


function getCaloriesByDay() {

    switch (days) {
        case 'Monday':
            alert(caloriesPerDay[0])
            break
        case 'Tuesday':
            alert(caloriesPerDay[1])
            break
        case 'Wednesday':
            alert(caloriesPerDay[2])
            break
        case 'Thursday':
            alert(caloriesPerDay[3])
            break
        case 'Friday':
            alert(caloriesPerDay[4])
            break
        case 'Saturday':
            alert(caloriesPerDay[5])
            break
        case 'Sunday':
            alert(caloriesPerDay[6])
            break
        default:
            alert("Whoops, something went wrong")
    }
}

function getTotalWeeklyCalories() {

    var runningTotal = 0
    for (i = 0; i < caloriesPerDay.length; i++) {
        runningTotal = runningTotal + caloriesPerDay[i]

    }
    return runningTotal
}

function getIdealWeeklyCalories() {
    return idealDailyCalories * 7

}
function calculateHealthPlan() {

    var actualWeeklyCalories = getTotalWeeklyCalories()
    var idealWeeklyCalories = getIdealWeeklyCalories()
    if (actualWeeklyCalories === idealWeeklyCalories) {
        alert('You matched your calorie goal exactly this week')
    }
    else if (actualWeeklyCalories > idealWeeklyCalories) {
        alert('You have exceeded your calorie goal for this week')
    }
    else if (actualWeeklyCalories < idealWeeklyCalories) {
        alert('You are below your calorie goal for this week')
    } else if (actualWeeklyCalories < 100) {
        alert('You are dead')
    }
    else { alert('Error') }
}
