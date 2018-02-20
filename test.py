import json

json_dict = json.load(open('data.json', 'r'))
print(json_dict)
json_str = json.dumps(json_dict)
print(json_str)

json_dict = {}
json_dict['test'] = 'test'
json_dict['test2'] = 'test2'
json_str = json.dumps(json_dict)
print(json_str)
