export const creditPolicies = [
    {
      "name": "Adiantamento Salarial - PT",
      "maxWorkingMonths": 10,
      "minWorkingMonths": 1,
      "salaryQtd": 0.4,
      "minCreditRequestAmount": 1,
      "monthlyAndRegisterFee": [
        {
          "insuranceType": "uninsured",
          "minMonth": 1,
          "maxMonth": 60,
          "monthlyFee": 1,
          "registerFee": 1,
        }
      ]
    },
    {
      "name": "Default",
      "maxWorkingMonths": 999,
      "minWorkingMonths": 100,
      "salaryQtd": 10000,
      "minCreditRequestAmount": 100,
      "monthlyAndRegisterFee": [ 
        {
          "insuranceType": "uninsured",
          "minMonth": 1,
          "maxMonth": 20,
          "monthlyFee": 0.7,
          "registerFee": 5,
        },
        {
          "insuranceType": "optional",
          "minMonth": 21,
          "maxMonth": 32,
          "monthlyFee": 1.0,
          "registerFee": 10,
        },
        {
          "insuranceType": "required",
          "minMonth": 33,
          "maxMonth": 42,
          "monthlyFee": 1.5,
          "registerFee": 15,
        }
      ],
    },
  ]
