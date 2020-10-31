import React, { useState, useEffect } from "react";
import {
	Text,
	ScrollView,
	View,
	CheckBox,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";


export default function TodoDetailScreen({ route }) {
	var { todoItem } = route.params;
	const [inputText, setInputText] = useState("");
	const [taskList, setTasks] = useState(todoItem.tasks);
	const [isDone, setIsDone] = useState(todoItem.status);
	const taskCount = taskList.length;
	const checkedCount = taskList.filter((task) => task.checked).length;
	// // stateCallback = {
	// 	callback = setStatus
	// }
	handleAddNewTask = () => {
		if (inputText.length > 0) {
			setTasks([
				...taskList,
				{
					text: inputText,
					key: taskList.length + 1,
					checked: false,
				},
			]);

			setInputText("");
		} else {
			alert("Bạn phải nhập task");
		}
	};

	checkTask = (task) => {
		const newTasks = [...taskList];
		newTasks.find((t) => t.key == task.key).checked = !task.checked;
		setTasks(newTasks);
	};

	useEffect(() => {
		if (checkedCount == taskCount && checkedCount != 0) {
			setIsDone(true);
		} else {
			setIsDone(false);
		}
	});
	
  

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style={styles.borderTitle}>
					<Text style={styles.title}>{todoItem.title}</Text>
				</View>
				<View style={styles.titleContainer}>
					<Text
						style={styles.status}
						color={isDone ? "#92D04E" : "#E84946"}
					>
						Status: {isDone ? "Done!" : "Not Done!"}
					</Text>
					<FontAwesome
						name={"check"}
						name={isDone ? "check" : "remove"}
						size={30}
						color={isDone ? "#92D04E" : "#E84946"}
					/>
				</View>
				<View>
					<Text style={{ fontSize: 18, color: "gray" }}>
						{checkedCount} / {taskCount} tasks
					</Text>
				</View>
				<View style={styles.jobList}>
					<Text style={styles.tasks}>Tasks</Text>

					<ScrollView>
						{taskList.map((task) => (
							<View key={task.key} style={styles.taskWrapper}>
								<Text
									style={[
										styles.task,
										{
											textDecorationLine: task.checked
												? "line-through"
												: "none",
											color: task.checked
												? Colors.gray
												: Colors.black,
										},
									]}
								>
									{task.key}: {task.text}
								</Text>
								<CheckBox
									value={task.checked}
									onValueChange={() => {
										checkTask(task);
									}}
								/>
							</View>
						))}
					</ScrollView>
				</View>
			</ScrollView>
			<View style={styles.newTodoContainer}>
				<TextInput
					style={styles.newTodo}
				
					onChangeText={(inputText) => setInputText(inputText)}
					// blurOnSubmit={true}
					placeholder="Add tasks ..."
					onSubmitEditing={() => handleAddNewTask()}
					value={inputText}
				/>
				<TouchableOpacity
					style={styles.newTodoButton}
					onPress={() => handleAddNewTask()}
				>
					<EvilIcons name="plus" size={40} color="#fff"></EvilIcons>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	containerReverse: {
		flex: 1,
		flexDirection: "column-reverse",
		alignContent: "center",
		paddingHorizontal: 15,
		paddingVertical: 10,
	},
	contentContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	borderTitle: {
		borderBottomWidth: 1,
		borderBottomColor: Colors.blue,
		width: "95%",
		marginBottom: 12,
	},
	title: {
		fontWeight: "700",
		fontSize: 32,
		margin: 8,
		color: Colors.green,
		maxWidth: "75%",
	},
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	status: {
		fontSize: 20,
	},
	tasks: {
		color: Colors.border,
		fontSize: 20,
		fontWeight: "600",
		alignSelf: "center",
		marginBottom: 5,
	},
	job: {
		alignSelf: "flex-start",
		maxWidth: "75%",
		fontSize: 16,
	},
	jobContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	jobList: {
		padding: 15,
		borderColor: Colors.border,
		borderWidth: 0.5,
		borderRadius: 10,
		paddingBottom: 15,
		margin: 5,
		width: "90%",
	},
	newTodoContainer: {
		flexDirection: "row",
		marginBottom: 12,
		marginTop: 12,
		alignSelf: "center",
	},
	newTodo: {
		width: "75%",
		height: 40,
		borderBottomWidth: 1,
		fontSize: 22,
		borderBottomColor: Colors.primary,
		color: Colors.primary,
	},
	newTodoButton: {
		height: 40,
		width: 40,
		backgroundColor: Colors.primary,
		borderRadius: 20,
		marginLeft: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	taskWrapper: {
		marginTop: "5%",
		flexDirection: "row",
		borderColor: "black",
		borderBottomWidth: 0.5,
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
		minHeight: 40,
	},
});
