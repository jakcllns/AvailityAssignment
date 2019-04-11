import csv
import os
from CompanyModel import CompanyPortfolio

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
COMPANY_COLUMN = 4
VERSION_COLUMN = 3
LAST_NAME_COLUMN = 2
USERID_COLUMN = 0

# Open file as CSV
def GetCsvFile():
    return open(BASE_DIR + '\\mockData.csv')

def Main():
    csvData = GetCsvFile()
    reader = csv.reader(csvData, 'excel')
    headers = reader.__next__()
    companies = CompanyPortfolio(headers)

    for row in reader:
        companies.addRecord(row)

    companies.sortCompaniesByLastNames()

    if os.path.exists(BASE_DIR + '\\OutputFiles') == False:
        os.mkdir(BASE_DIR + '\\OutputFiles')

    for key in companies.portfolio:
        with open(BASE_DIR + '\\OutputFiles\\' + key + '.csv', 'w') as companyFile:
            writer = csv.writer(companyFile, 'excel')
            writer.writerows(companies.getCompanyRecords(key))
    
    csvData.close()

Main()
