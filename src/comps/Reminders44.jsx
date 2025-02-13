import React, { useState, useEffect } from "react";

function App() {
    // States for the inputs
    const [goal, setGoal] = useState("");
    const [months, setMonths] = useState(0);
    const [days, setDays] = useState(0);
    const [reminder, setReminder] = useState(null);

    // State for countdown
    const [timeLeft, setTimeLeft] = useState(null);

    // Function to calculate the time left
    const calculateTimeLeft = () => {
        const currentDate = new Date();
        const targetDate = new Date(currentDate);

        // Adding months and days to the current date
        targetDate.setMonth(targetDate.getMonth() + months);
        targetDate.setDate(targetDate.getDate() + days);

        // Calculate the difference in time (in milliseconds)
        const difference = targetDate - currentDate;

        if (difference <= 0) return null;

        // Calculate months, days, hours, minutes, and seconds
        const totalSeconds = Math.floor(difference / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);
        const totalMonths = Math.floor(totalDays / 30); // Assuming 30 days per month

        return {
            months: totalMonths,
            days: totalDays % 30,
            hours: totalHours % 24,
            minutes: totalMinutes % 60,
            seconds: totalSeconds % 60,
        };
    };

    // Update time left every second for the countdown
    useEffect(() => {
        let interval = null;

        if (reminder) {
            interval = setInterval(() => {
                const updatedTime = calculateTimeLeft();
                console.log(updatedTime); // Check if time left is being updated
                if (updatedTime) {
                    setTimeLeft(updatedTime);
                } else {
                    setTimeLeft(null); // Reset countdown when time's up
                    clearInterval(interval);
                }
            }, 1000); // Update every second
        }

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, [reminder]);

    // Handler for the "Add Reminder" button click
    const handleAddReminder = () => {
        if (goal.trim() === "") {
            console.log("Goal is empty. Please enter a goal.");
            return;
        }

        console.log("Adding reminder..."); // Debugging line
        const timeLeft = calculateTimeLeft();

        if (timeLeft) {
            setReminder({
                goal,
                months,
                days,
                timeLeft,
            });
        } else {
            console.log("Invalid time left calculation.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4">Set a Goal Reminder</h1>
                <div className="space-y-4">
                    {/* Goal Input */}
                    <input
                        type="text"
                        placeholder="Enter your goal"
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />

                    {/* Months Input */}
                    <input
                        type="number"
                        placeholder="Enter number of months"
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={months}
                        onChange={(e) => setMonths(Number(e.target.value))}
                    />

                    {/* Days Input */}
                    <input
                        type="number"
                        placeholder="Enter number of days"
                        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={days}
                        onChange={(e) => setDays(Number(e.target.value))}
                    />

                    {/* Add Reminder Button */}
                    <button
                        onClick={handleAddReminder}
                        className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                    >
                        Add Reminder
                    </button>
                </div>

                {/* Reminder Display */}
                {reminder && timeLeft && (
                    <div className="mt-6 text-center">
                        <h2 className="text-lg font-semibold">Goal: {reminder.goal}</h2>
                        <div className="text-sm mt-2 text-gray-700">
                            <p>Time remaining:</p>
                            <p>
                                {timeLeft.months} months, {timeLeft.days} days, {timeLeft.hours} hours,{" "}
                                {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
                            </p>
                        </div>
                    </div>
                )}

                {/* If time's up */}
                {reminder && !timeLeft && (
                    <div className="mt-6 text-center text-red-500">
                        <h2 className="text-lg font-semibold">Goal Completed!</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
