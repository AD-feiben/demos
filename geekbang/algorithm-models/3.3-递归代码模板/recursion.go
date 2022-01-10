package main

// Go
func Recursion(level int, param int) {
	// terminator
	if level > MAX_LEVEL {
		return
	}
	// proccess current level
	Process(level, param)
	// drill down
	Recursion(level+1, param)
	// clean current level status if needed
}
