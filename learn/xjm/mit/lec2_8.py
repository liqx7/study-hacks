varA = True 
varB = 2
if type(varA)==type('q') or type(varB)==type('q'):
    print('string involved')
elif varA > varB:
    print('bigger')
elif varA == varB:
    print('equal')
elif varA < varB:
    print('smaller')
