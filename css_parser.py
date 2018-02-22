import sys

#parse 1 line css file to readable format
#usage: python3 css_parser.py <input_file> <output_file>

#input 1 line css file
infile = sys.argv[1]

#output file
outfile = sys.argv[2]

data = ""
with open(infile,"r") as fd:
	data = fd.readline()

output = ""
ident = 0
prev = ""

for c in data:
	tmp = ""
	
	if c == '}':
		tmp = c + '\n'

		ident -= 1
		
		for i in range(ident):
			tmp = '\t' + tmp
		
		if prev != '}':
			tmp = '\n' + tmp
		
		for i in range(ident):
			tmp = tmp + '\t'

		if prev == '}':
			output = output[:-1]

	elif c == '{':
		tmp = "{\n"
		ident += 1
		for i in range(ident):
			tmp = tmp + '\t'

	elif c == ';':
		tmp = ';\n'
		for i in range(ident):
			tmp = tmp + '\t'

	else:
		tmp = c

	prev = c
	output += tmp

out = open(outfile,'w')
out.write(output)
out.close()
