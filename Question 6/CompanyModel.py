class CompanyPortfolio(object):
    portfolio = {}
    headers = []
    REC = 'records'
    USER = 'userids'

    def __init__(self, headers):
        self.headers = headers
        # self.addNewCompany(record, record[-1])

    def addRecord(self, record):
        company = record[-1]
        index = 0
        if self.portfolio.get(company) == None:
            self.addNewCompany(record, company)
        else:
            index = self.portfolio[company][self.USER].get(record[0])
            if index == None:
                self.portfolio[company][self.REC].append(record)
                index = len(self.portfolio[company][self.REC]) - 1
                self.portfolio[company][self.USER][record[0]] = index
            else:
                if self.portfolio[company][self.REC][index][3] < record[3]:
                    self.portfolio[company][self.REC][index] = record


    def addNewCompany(self, record, company):
        self.portfolio[company] = {
            self.REC: [self.headers, record],
            self.USER: {record[0]: 1}
        }

    def sortCompaniesByLastNames(self):
        for key in self.portfolio:
            self.portfolio[key][self.REC].sort(key=lambda x: x[2], reverse=False)

    def getCompanyRecords(self, companyName):
        return self.portfolio[companyName][self.REC]