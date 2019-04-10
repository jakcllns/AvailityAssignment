import csv
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
COMPANY_COLUMN = 4
VERSION_COLUMN = 3
LAST_NAME_COLUMN = 2
USERID_COLUMN = 0

# Open file as CSV
def GetCsvFile():
    return open(BASE_DIR + '\\mockData.csv')

# Separate file by Insurance Company

# Sort Users in Insurance Company by Last Name

# Only include the most recent version # for duplicate user ids

# Output separete files for each company to the OutputFiles folder

def Main():
    csvData = GetCsvFile()
    reader = csv.reader(csvData, 'excel')
    companies = {}
    index = 0
    headers = reader.__next__()

    for row in reader:
        if companies.get(row[-1]) == None:
            companies[row[-1]] =  {'records':[headers, row], 'userids': { row[0]: 1 }}
        else:
            if companies[row[-1]]['userids'].get(row[0]) == None:
                companies[row[-1]]['records'].append(row)
                index = len(companies[row[-1]]['records']) - 1
                companies[row[-1]]['userids'][row[0]] = index
            else:
                index = companies[row[-1]]['userids'][row[0]]
                if companies[row[-1]]['records'][index][3] < row[3]:
                    companies[row[-1]]['records'][index] = row
    
    for key in companies:
        companies[key]['records'].sort(key=lambda x: x[2], reverse=False)
        with open(BASE_DIR + '\\OutputFiles\\' + key + '.csv', 'w') as companyFile:
            writer = csv.writer(companyFile, 'excel')
            writer.writerows(companies[key]['records'])
    csvData.close()

Main()
