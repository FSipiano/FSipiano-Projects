var caloriesPerDay = [0, 0, 0, 0, 0, 0, 0]

caloriesPerDay[0] = parseInt(prompt('Enter calories for Monday'), 10)
caloriesPerDay[1] = parseInt(prompt('Enter calories for Tuesday'), 10)
caloriesPerDay[2] = parseInt(prompt('Enter calories for Wednesday'), 10)
caloriesPerDay[3] = parseInt(prompt('Enter calories for Thursday'), 10)
caloriesPerDay[4] = parseInt(prompt('Enter calories for Friday'), 10)
caloriesPerDay[5] = parseInt(prompt('Enter calories for Saturday'), 10)
caloriesPerDay[6] = parseInt(prompt('Enter calories for Sunday'), 10)

getTotalCalories()

function getCaloriesByDay() {

    switch (inputDays) {
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

var idealDailyCalories = 1500

function getTotalCalories() {

    var runningTotal = 0
    for (i = 0; i < caloriesPerDay.length; i++) {
        runningTotal = runningTotal + caloriesPerDay[i]

        return runningTotal
    }
   
}

alert("You've consumed " + runningTotal + " calories this week.")

function getIdealCalories() {
    idealDailyCalories = idealDailyCalories * 7
    idealDailyCalories = idealWeeklyCalories
return idealWeeklyCalories
}
 

console.log(getIdealCalories)

function calculateHealthPlan() {

    var actualCalories = getTotalCalories()
    var idealDailyCalories = getIdealCalories()

    if (actualCalories === idealDailyCalories) {
        alert('You matched your calorie goal exactly this week')
    }
    else if (actualCalories > idealDailyCalories) {
        alert('You have exceeded your calorie goal for this week')
    }
    else if (actualCalories < idealDailyCalories) {
        alert('You are below your calorie goal for this week')
    } else if (actualCalories < 100){
        alert('You are dead')
    }
    else {alert('Error')}
}
calculateHealthPlan()
