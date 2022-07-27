import React, { createContext } from "react"

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import HeadBar from "HeadBar"
import Home from "views/home"
import Lists from "views/lists"
import Profile from "views/profile"
import { ListStorage } from "listStorage"
import { DatabaseManager } from "./listStorage/databaseManager"
import { UserDatabase } from "user"
import "./App.css"

const userDB = new UserDatabase()
const dbClient = new ListStorage("group_list")
const dbManager = new DatabaseManager()

export const UserContext = createContext(userDB)
export const DatabaseContext = createContext(dbClient)
export const DatabaseManagerContext = createContext(dbManager)

function App() {

	return (
		<UserContext.Provider value={userDB}>
			<DatabaseContext.Provider value={dbClient}>
				<Router>
					<HeadBar/>
					<br/>
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/lists/:listName" element={<Lists />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/*" element={<Navigate to="/home"/>} />
					</Routes>
				</Router>
			</DatabaseContext.Provider>
		</UserContext.Provider>
	)
}
 
export default App
