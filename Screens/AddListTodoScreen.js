import React, { useState, useEffect } from "react";
import {
	ScrollView,
	TextInput,
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
	KeyboardAvoidingView,
	Alert,
	FlatList,
} from "react-native";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";
import TodoItem from "../Components/TodoItem";
import { todos } from "../Data/Todo";

import axios from "axios";

const AddList = ({ navigation }) => {
	const [value, setValue] = useState("");
	const [todoList, setTodoList] = useState(todos);
	const handleDeleteTodo = (id) => {
		Alert.alert(
			"",
			"Delete this todo item?",
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "OK",
					onPress: () => {
						const newToDo = todoList.filter((todo) => {
							if (todo.id !== id) return true; //true :khong thay doi, là false thì lọc ra khỏi mảng
						});
						setTodoList(newToDo);
					},
				},
			],
			{ cancelable: false }
		);
	};

	handleAddTodo = () => {
		if (value.length > 0) {
			
			setTodoList([
				...todoList,
				{ title: value, id: todoList.length + 1, status: false, tasks: [] },
			]);
			setValue("");
		} else {
			alert("Bạn phải nhập dữ liệu");
		}
	};
	// useEffect(() => {
	// 	fetch('http://192.168.18.107:3000/todo/findall')
	// 	  .then((response) => response.json())
	// 	  .then((json) => setTodoList(json))
	// 	  .catch((error) => console.error(error))
	// 	  .finally(() => setLoading(false));
	//   }, []);
  
	const renderItem = ({ item }) => (
		
		<TodoItem
			id={item.id}
			todoItem={item}
			_delete={handleDeleteTodo}
			navigate={navigation.navigate}
		/>
	);
	
	
	return (
		<KeyboardAvoidingView style={styles.container}>
			<View style={styles.newTodoContainer}>
				<TextInput
					style={styles.newTodo}
					onChangeText={(value) => setValue(value)}
					// blurOnSubmit={true}
					autoFocus={true}
					onSubmitEditing={() => handleAddTodo()}
					returnKeyType="done"
					placeholder="Enter a Todo item ..."
					value={value}
				/>
				<TouchableOpacity
					style={styles.newTodoButton}
					onPress={() => handleAddTodo()}
				>
					<EvilIcons name="plus" size={40} color="#fff" />
				</TouchableOpacity>
			</View>
			<View style={styles.todoList}>
				<View style={styles.recentWrap}>
				<Text style={styles.recentTitle}>RECENT NOTES</Text>
					<View>
						<TouchableOpacity>
							<MaterialIcons
								name="delete-sweep"
								size={30}
								color={Colors.primary}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView>
					<FlatList
						data={todoList}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
					/>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
};
export default AddList;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 30,
		paddingBottom: 5,
	},
	recentWrap: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 8,
	},
	recentTitle: {
		fontSize: 16,
		color: Colors.grey,
	},
	newTodoContainer: {
		flexDirection: "row",
		marginBottom: 18,
	},
	newTodo: {
		width: "80%",
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
	todoList: {
		flex: 1,
		borderRadius: 20,
		width: "100%",
	},
	containerItem: {
		padding: 15,
		height: 80,
		backgroundColor: Colors.primary_item,
		flexDirection: "row",
		width: "100%",
		borderRadius: 10,
		marginVertical: 8,
		alignItems: "center",
		justifyContent: "space-between",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	titleWrap: {
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		fontWeight: "700",
		fontSize: 20,
		maxWidth: 220,
		marginLeft: 8,
	},
	statusIcon: {
		height: 35,
		width: 35,
		borderRadius: 20,
		marginLeft: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: {
		flexDirection: "row",
	},
	status: {
		width: 12,
		height: 12,
		borderRadius: 999,
		marginHorizontal: 4,
	},
});
