options( digits = 16 )
library( jsonlite )

v = 1
x = c( -5, -2.5, 0, 2.5, 5 )
y = pt( x, v )

cat( y, sep = ",\n" )

data = list(
	v = v,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
