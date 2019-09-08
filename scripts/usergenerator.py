import random
import json

FOOD = [
            "Homemade",
            "Barbecue",
            "Fast-Food",
            "Pasta",
            "Pizza",
            "Dessert",
            "Japanese",
            "Salad",
            "Seafood",
            "Asian"
          ]

DAY_TIME = ['morning', 'afternoon', 'evening']
ACTIV_young = ["caffe", "restaurant", "club", "pub"]
ACTIV_old = ["caffe", "restaurant", "pub"]
WEEK_DAYS = ['sunday',
'monday',
'tuesday',
'wednesday',
'thursday',
'friday',
'saturday']
OLD_AGE = 45


names = [["Robert","Thomas"],
["Barbara","Johnson"],
["Susan","Smith"],
["Robert","Thompson"],
["Daniel","Rodriguez"],
["Robert","White"],
["William","Wilson"],
["David","Lee"],
["Richard","Jones"],
["John","Taylor"],
["John","Moore"],
["Thomas","Brown"],
["Richard","Williams"],
["William","Taylor"],
["David","Martin"],
["David","Martinez"],
["William","Moore"],
["David","Rodriguez"],
["Thomas","Williams"],
["Linda","Williams"],
["David","Moore"],
["Daniel","Miller"],
["William","Martin"],
["Joseph","Johnson"],
["David","White"],
["Michael","Jackson"],
["Charles","Davis"],
["William","White"],
["Patricia","Williams"],
["Thomas","Jones"],
["David","Thomas"],
["William","Thomas"],
["Jennifer","Brown"],
["John","Thompson"],
["Charles","Miller"],
["Robert","Jackson"],
["David","Thompson"],
["Elizabeth","Johnson"],
["Mary","Wilson"],
["David","Taylor"],
["John","Lee"],
["Jennifer","Williams"],
["John","White"],
["Michael","Garcia"],
["Linda","Jones"],
["Joseph","Williams"],
["Linda","Brown"],
["William","Thompson"],
["Thomas","Miller"],
["Mary","Anderson"],
["Patricia","Brown"],]

def generator():
        
    personsjson = []
    id = 0
    for name in names:
        first, last = name
        print (first + " " +  last)
        age = random.randint(22,68)
        gender = input('gender ..')
        if gender == 'm':
            gender = 'male'
        else:
            gender = 'female'
        
        kosher = 1 if random.randint(0,1) else 0

        rndfoodrange = random.randint(1, len(FOOD))
        personFoods = random.sample(FOOD, rndfoodrange)
        
        if int(age) > OLD_AGE:
            rnd_activ = random.sample(ACTIV_old, random.randint(1, len(ACTIV_old)))
        else:
            rnd_activ = random.sample(ACTIV_young, random.randint(1, len(ACTIV_young)))
        

        
        hourActive = DAY_TIME[random.randint(0,2)]



        dayActive = random.sample(WEEK_DAYS, random.randint(1,len(WEEK_DAYS)))

        # print('fullname:: {} {} \nage: {} \ng: {} \nkosher: {} \nfoods: {} \nactivi: {} \ndayactive: {} \nhouractive: {}'.format(first, last, age, gender, kosher, personFoods, rnd_activ, dayActive, hourActive))
        personsum = {
        '_id': id,
        'name': first + ' ' + last,
        'age': age,
        'gender': gender,
        'kosher': kosher,
        'food': personFoods,
        'activities': rnd_activ, 
        'activeDays': dayActive,
        'activeTime': hourActive,
        'imageURL': ""}
        id += 1
        personsjson.append(personsum)
        # if first == 'Robert': break
    print('enddd')
    print(personsjson)

    with open ('data.json', 'w') as f:
        json.dump(personsjson,f)

def fixer():
    datastore = []
    with open('data.json', 'r') as f:
        datastore = json.load(f)
        for person in datastore:
            if person['food'] == None:
                rndfoodrange = random.randint(1, len(FOOD))
                person['food'] = random.sample(FOOD, rndfoodrange)
            person['activeTime'] = DAY_TIME[random.randint(0,2)]
            person['kosher'] = random.randint(0,1)
    
    print(datastore)

    with open('data_fixed.json', 'w') as f:
        json.dump(datastore, f)     

fixer()