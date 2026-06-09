[
  { type: "command", topic: "files", q: "List all files in the current directory, including hidden files, in long format with human-readable sizes.", answer: ["ls -lah", "ls -alh", "ls -ha -l"], expl: "l=long format, a=all files (including hidden), h=human-readable sizes" },
  { type: "mc", topic: "files", q: "What does the file command do?", choices: ["Lists files in a directory", "Identifies file type based on content", "Copies a file", "Changes file permissions"], answer: 1, expl: "file detects the actual file type regardless of extension" },
  { type: "command", topic: "files", q: "Copy a file 'report.pdf' preserving all permissions and timestamps.", answer: ["cp -a report.pdf report_copy.pdf", "cp -p report.pdf report_copy.pdf"], expl: "a=archive mode (preserves permissions, timestamps), p=preserve mode" },
  { type: "output", topic: "files", q: "What does this command output?", code: "$ file script.sh", answer: ["A description of the file type (e.g., shell script)"], expl: "file analyzes file content and reports its type" },

  { type: "command", topic: "text-processing", q: "Sort the contents of 'data.txt' numerically.", answer: ["sort -n data.txt"], expl: "n flag performs numeric sort instead of alphabetic" },
  { type: "command", topic: "text-processing", q: "Remove duplicate consecutive lines from 'names.txt' and show how many duplicates exist.", answer: ["sort names.txt | uniq -c"], expl: "c flag counts occurrences; typically sort before uniq" },
  { type: "mc", topic: "text-processing", q: "Which filter translates characters from one set to another?", choices: ["sed", "grep", "tr", "awk"], answer: 2, expl: "tr (translate) converts characters; e.g., tr 'a-z' 'A-Z'" },
  { type: "command", topic: "text-processing", q: "Convert all lowercase letters to uppercase in 'file.txt' without modifying the original.", answer: ["tr 'a-z' 'A-Z' < file.txt"], expl: "tr requires input redirection with < to read from file" },
  { type: "output", topic: "text-processing", q: "What is the output of this command?", code: "$ echo 'hello world' | tr ' ' '\\n'", answer: ["hello", "world"], expl: "Replaces space with newline, splitting into two lines" },
  { type: "command", topic: "text-processing", q: "Search for lines containing 'error' in 'log.txt' (case-insensitive).", answer: ["grep -i error log.txt"], expl: "i flag makes grep case-insensitive" },
  { type: "command", topic: "text-processing", q: "Replace all occurrences of 'localhost' with '127.0.0.1' in 'config.conf' in-place.", answer: ["sed -i 's/localhost/127.0.0.1/g' config.conf"], expl: "i flag modifies file in-place; g flag replaces all occurrences globally" },
  { type: "mc", topic: "text-processing", q: "What does 'awk' primarily do?", choices: ["Print file line by line", "Powerful text processor and programming language for filtering", "Compress files", "Create archives"], answer: 1, expl: "awk is a full programming language designed for text/data processing" },
  { type: "command", topic: "text-processing", q: "Print only the first column of 'data.csv' where the third column is greater than 70.", answer: ["awk '$3 > 70 {print $1}' data.csv"], expl: "awk allows conditional logic to process specific fields" },
  { type: "flags", topic: "text-processing", q: "Explain grep flags.", flags: [
    { flag: "-i", answer: ["Case-insensitive search"] },
    { flag: "-r", answer: ["Recursive search in directories"] },
    { flag: "-E", answer: ["Use extended regex patterns"] },
    { flag: "-v", answer: ["Invert match (lines NOT matching)"] }
  ], expl: "grep is essential for searching text patterns in files" },

  { type: "command", topic: "pipelines", q: "List all files larger than 100MB in the current directory, sorted by size descending.", answer: ["ls -lS | grep -v '^d' | awk '$5 > 104857600 {print}'", "du -h | sort -hr | head -10"], expl: "Combines multiple commands with pipes to filter and sort" },
  { type: "output", topic: "pipelines", q: "What does this pipeline do?", code: "$ cat access.log | sort | uniq -c | sort -rn | head -5", answer: ["Shows the 5 most frequent entries in access.log"], expl: "Sorts, counts duplicates, reverses by count, shows top 5" },
  { type: "command", topic: "pipelines", q: "Find all files ending with '.log' and count how many there are.", answer: ["find . -name '*.log' | wc -l"], expl: "wc -l counts lines; pipe from find to count total files" },
  { type: "mc", topic: "pipelines", q: "In a pipeline, what happens to the standard output of the left command?", choices: ["It is displayed on screen", "It becomes the standard input of the right command", "It is saved to a file", "It is discarded"], answer: 1, expl: "The | operator connects stdout of left to stdin of right" },

  { type: "command", topic: "expansion", q: "Print the result of calculating 5 squared (5 to the power of 2).", answer: ["echo $((5**2))", "echo $(( 5 ** 2 ))"], expl: "Arithmetic expansion with $(()) evaluates mathematical expressions" },
  { type: "output", topic: "expansion", q: "What does this command output?", code: "$ echo $((10 + 5 * 2))", answer: ["20"], expl: "Arithmetic expansion follows order of operations" },
  { type: "command", topic: "expansion", q: "Generate a list of numbers from 1 to 5.", answer: ["echo {1..5}"], expl: "Brace expansion with .. range generates sequences" },
  { type: "command", topic: "expansion", q: "Create directories named project_A, project_B, and project_C.", answer: ["mkdir project_{A,B,C}"], expl: "Brace expansion with comma-separated values generates multiple arguments" },
  { type: "mc", topic: "expansion", q: "What is the output of echo ~root?", choices: ["The root user's home directory path", "A literal tilde character", "The current user's home directory", "An error"], answer: 0, expl: "Tilde expansion replaces ~username with that user's home directory" },
  { type: "command", topic: "expansion", q: "Print the current user's username using parameter expansion.", answer: ["echo $USER"], expl: "$USER is a parameter (environment variable) containing the username" },
  { type: "output", topic: "expansion", q: "What does this command output?", code: "$ echo $(date)", answer: ["The current date and time"], expl: "Command substitution $(command) executes the command and substitutes its output" },
  { type: "flags", topic: "expansion", q: "Explain quoting mechanisms.", flags: [
    { flag: "Double quotes \" \"", answer: ["Allow variable expansion and command substitution but prevent word splitting"] },
    { flag: "Single quotes ' '", answer: ["Prevent all expansions (hardest quote)"] },
    { flag: "Backslash \\", answer: ["Escape next character to remove its special meaning"] }
  ], expl: "Different quoting levels control which expansions occur" },

  { type: "command", topic: "quoting", q: "Print the literal string '$USER' without expanding the variable.", answer: ["echo '$USER'"], expl: "Single quotes prevent all expansions; prints literal $USER" },
  { type: "output", topic: "quoting", q: "Compare the outputs: echo $USER vs echo \"$USER\" vs echo '$USER'", code: "echo $USER\necho \"$USER\"\necho '$USER'", answer: ["First two show username; third shows literal '$USER'"], expl: "Double quotes allow expansion; single quotes prevent it" },
  { type: "command", topic: "quoting", q: "Print a price with a literal dollar sign: Balance: $500", answer: ["echo \"Balance: \\$500\""], expl: "Backslash escapes the $ to prevent variable expansion" },
  { type: "mc", topic: "quoting", q: "What does double-quoting variables prevent?", choices: ["Variable expansion", "Word-splitting on spaces and special characters", "Command substitution", "Both A and C"], answer: 1, expl: "Double quotes allow expansion but prevent word splitting" },

  { type: "command", topic: "escaping", q: "Move a file named 'bad&file.txt' to 'goodfile.txt'.", answer: ["mv bad\\&file.txt goodfile.txt"], expl: "Backslash escapes the & to treat it as a literal character" },
  { type: "command", topic: "escaping", q: "Continue a long command across multiple lines.", answer: ["ls -l \\\n--reverse \\\n--human-readable"], expl: "Trailing backslash allows command continuation on next line (no spaces after backslash)" },
  { type: "output", topic: "escaping", q: "What does the escape sequence \\t represent?", answer: ["A tab character"], expl: "Common escape sequences: \\n=newline, \\t=tab, \\a=bell, \\\\=backslash" },

  { type: "command", topic: "wildcards", q: "List all files with a .txt extension in the current directory.", answer: ["ls *.txt"], expl: "* wildcard matches zero or more characters" },
  { type: "command", topic: "wildcards", q: "List files whose names start with uppercase letters.", answer: ["ls [A-Z]*", "ls [[:upper:]]*"], expl: "[A-Z] matches single uppercase letter; * matches rest of name" },
  { type: "mc", topic: "wildcards", q: "What does the ? wildcard match?", choices: ["Zero or more characters", "Exactly one character", "Any character in brackets", "All hidden files"], answer: 1, expl: "? matches exactly one character; * matches zero or more" },
  { type: "command", topic: "wildcards", q: "List files that have a three-letter extension.", answer: ["ls *.???"], expl: "? matches exactly one character; three ? match three-letter extensions" },
  { type: "output", topic: "wildcards", q: "What does ls file[12].txt match?", answer: ["file1.txt and file2.txt"], expl: "[12] matches a single digit, either 1 or 2" },

  { type: "command", topic: "command-types", q: "Determine whether 'ls' is a shell builtin, external command, or alias.", answer: ["type ls"], expl: "type command identifies command type and location" },
  { type: "mc", topic: "command-types", q: "What are the 4 types of commands in Bash?", choices: ["Built-in, External, Function, Alias", "Script, Binary, Shell, System", "Local, Remote, Internal, External", "User, Admin, System, Service"], answer: 0, expl: "Commands can be shell builtins, executable programs, shell functions, or aliases" },
  { type: "command", topic: "command-types", q: "Find the full path to the 'python' executable.", answer: ["which python"], expl: "which locates executables in PATH" },
  { type: "output", topic: "command-types", q: "What does 'type -a python' show?", answer: ["All matching python commands in PATH"], expl: "a flag shows all matches; useful when multiple versions exist" },

  { type: "command", topic: "package-management", q: "Install the package 'gedit' on a Debian/Ubuntu system.", answer: ["sudo apt install gedit"], expl: "apt is the package manager for Debian-based systems" },
  { type: "command", topic: "package-management", q: "Remove the package 'gedit' completely.", answer: ["sudo apt remove gedit"], expl: "apt remove uninstalls a package" },
  { type: "mc", topic: "package-management", q: "What command displays installed packages?", choices: ["apt install", "dpkg --list", "sudo apt remove", "apt update"], answer: 1, expl: "dpkg --list shows all installed packages on Debian-based systems" },

  { type: "command", topic: "files", q: "Move all CSV files to an 'archive' directory.", answer: ["mv *.csv archive/"], expl: "Wildcard * matches all .csv files; mv moves them to destination directory" },
  { type: "output", topic: "files", q: "What does ls -lt output?", answer: ["Files sorted by modification time, newest first"], expl: "l=long format, t=sort by time, newest first" },
  { type: "command", topic: "files", q: "List only the 10 largest files in /var/log.", answer: ["ls -lS /var/log | head -10"], expl: "S sorts by size; head limits output to first 10 lines" },

  { type: "command", topic: "text-processing", q: "Format a text file to 60 characters per line and display the result.", answer: ["fmt -w 60 text.txt", "cat text.txt | fmt -w 60"], expl: "fmt reformats text; -w sets column width" },
  { type: "command", topic: "text-processing", q: "Print the 10 most recent entries from a log file.", answer: ["tail -10 log.txt"], expl: "tail shows the end of file; -10 specifies number of lines" },
  { type: "output", topic: "text-processing", q: "What does head -n 5 access.log output?", answer: ["The first 5 lines of access.log"], expl: "head outputs beginning of file; n specifies line count" },

  { type: "command", topic: "expansion", q: "Create 12 backup directories for months 01-12 of the year 2025.", answer: ["mkdir 2025-{01..12}"], expl: "Brace expansion {01..12} generates numbers with zero-padding" },
  { type: "output", topic: "expansion", q: "What does echo {1..3} {a..c} output?", answer: ["1 2 3 a b c"], expl: "Each brace expansion is evaluated separately" },
  { type: "command", topic: "expansion", q: "List the absolute path of the cp command.", answer: ["echo $(which cp)", "ls -l $(which cp)"], expl: "Command substitution runs which cp, then its output is used" },

  { type: "mc", topic: "quoting", q: "When should you double-quote variables in shell scripts?", choices: ["Only for sensitive data", "Always, to prevent word-splitting errors", "Never, it reduces performance", "Only in loops"], answer: 1, expl: "Double-quoting prevents word-splitting errors when variables contain spaces" },
  { type: "command", topic: "scripting", q: "Execute a shell script that spans multiple lines using line continuation.", answer: ["command \\\nmore \\\nlines"], expl: "Backslash at end of line continues command on next line" },

  { type: "command", topic: "pipelines", q: "View the contents of a gzipped tar archive without extracting it.", answer: ["tar tzvf archive.tar.gz | less"], expl: "tar tzvf lists; pipe to less for pagination" },
  { type: "mc", topic: "text-processing", q: "What is the difference between sed and tr?", choices: ["sed works on single characters; tr works on lines", "tr translates characters; sed performs complex substitutions", "They are the same", "sed is only for compression"], answer: 1, expl: "tr translates character sets; sed is a powerful stream editor" },
  { type: "command", topic: "text-processing", q: "Delete all comment lines (starting with #) from a configuration file.", answer: ["sed '/^#/d' config.conf"], expl: "sed '/^#/d' deletes lines matching pattern ^# (start with #)" },

  { type: "output", topic: "expansion", q: "What is the order of shell expansions?", answer: ["Brace, Tilde, Parameter, Arithmetic, Command, Pathname, Word-splitting"], expl: "Understanding order helps debug complex commands" },
  { type: "command", topic: "files", q: "Find all .log files modified in the last 24 hours.", answer: ["find . -name '*.log' -mtime -1"], expl: "find with -mtime -1 shows files modified less than 1 day ago" },
  { type: "mc", topic: "text-processing", q: "Which command is best for extracting specific columns from CSV data?", choices: ["grep", "tr", "awk", "sed"], answer: 2, expl: "awk with -F',' can specify delimiter and extract columns" },
  { type: "command", topic: "text-processing", q: "Sum all values in the second column of 'data.txt'.", answer: ["awk '{sum+=$2} END {print sum}' data.txt"], expl: "awk accumulates column values and prints total in END block" }
]