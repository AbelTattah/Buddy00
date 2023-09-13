import React from "react";
import { Text, View, TextInput, Checkbox, Image} from "react-native";
import styles from "../Styling/styles";


const Task = (props) => {
    return(
        <View style = {styles.taskItem}>
            <View style = {styles.taskLeft}>
                <View style = {styles.taskCheck}></View>
                    <Text style = {styles.taskText}>{props.text}</Text>
                </View>
                <Image style = {styles.locationImage} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5ElEQVR4nNWaX2iXVRjHP21NY+RKEUdTU7vIXFiItyZ5MWRU6sh1UWhC3hguBbv4DRz4b3UhRkh65YUKhemKnDlBoougEZRK6sQMKSyM6dTaJJyok0e+Lxxet/3e9/ee8+7nFw78fuc953nO9/ec53mf85wfhMN0oAPoV/samM0jhunANWAo1qxvWh4LqAWaPMjp0MKPauHWutR3kMCoBnqAO8CKjLL6tehpMStZ33/kgIKUZSVzeRQi9oxyJ1MBvAr8IRldImDtmPrsWQNQSRmSqQQ+AP4cxsFHav9ozrhyIfMi8LOzwDPARuA14AvgKnAF+Bx4HdgqX4zGnwPmjDWZ+U6YPQ80JpT7GLAEuKi5/dqSY0KmHrihZwcU9dJiAnBIMv4F5pIzGfOJn9T3pZy8VDwOfOVsyypyJHNYny+UaIk4nnQi3QZyQEQmam94lG0+YzIv5RWa2xwiKz3Kte15QXIt4uWCjzxlAHFsldwd5Ii2AGQaJLObHPCJIo3hQym+C7zrQfazkvcXOeB/YL/zvdWjZaoly3QExTgpGoz1+7TMbckK+j6ZJCV9wzzzRea65DxNQER72LJcApG5JBlTCYh6KTk7ypisPtOj+S8QEI1S8l2RcVnIfK+5iwmI9VKyM8HYUrfZLs1rISB2S8n7CceXYpm1mvMZAXFGShakmJOWzEKN/5VAsIrIPR2A0sb4NNusSgc201VHAKxzToOlII1lDmqsbTOvsBT7dwlfmkFOUjJNzsEty+nzIaxyCgxZBSchUwH8pnE+ktEHqHMqJW97kpmEzDtOOvRMVoU1wEkJ7MQvkpD5VmN+UcWlJDznhFvzjyn4R7FoNlnb2cac1ppSYZFMGuVVMwiHYpaZ6eRffVpbIrzlnAk6s5jUI5karWVIa2tOIvRvTdjsO/RlJFMBbElzFO7V4OfJH61FyMxxKvlFsddxrpcoHzLzHF/Zk/QesccR1qWIMouxIfMxcFyRLUomLZolgjnXp6pmuCXSXh2q9ugOZIXKpq+okm5H4YlOi8pGhiec/lqF0nrNXQa8B6xxyqXbYrrt6mF7qbVmY74a+EaXNUM5tP0OmXan3263vKbyjfrl2qXUrqB/1HaMbnNvqRpyL7bIQT2LfmHzwx+AI8A+WWFNrPDg64I2FbqldHmR99SQyCdFIW8yN6XQ/KBYbWygxHTmjudbgGExIGWjZQNPOVsrLQp5WSa6jhvtbyBvZqy4FxwyLxMILc4BzLZQHJOcy5yklZiRyGwiIMYDp5x8qFnvpBpZIiJxIo8/CmTFVIfMcO1EqOoIAWC/tlVAzA8sAFizz7adgljiPr8Fm5Bx4YVdAAAAAElFTkSuQmCC'}}/>
                
            </View>
    );
};
//<View style = {styles.tasksstate}><Text>bell</Text></View>

export default Task;
