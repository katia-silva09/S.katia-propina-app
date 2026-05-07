import { useEffect, useState } from 'react';

export const useTipCalculator = () => {
  const [amount, setAmount] = useState('0');
  const [tipPercentage, setTipPercentage] = useState(10);
  const [people, setPeople] = useState(1);

  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  const buildAmount = (value: string) => {
    if (value === '.' && amount.includes('.')) return;

    if (amount === '0' && value !== '.') {
      setAmount(value);
      return;
    }

    setAmount(prev => prev + value);
  };

  const deleteLast = () => {
    if (amount.length === 1) {
      setAmount('0');
      return;
    }

    setAmount(prev => prev.slice(0, -1));
  };

  const increasePeople = () => {
    setPeople(prev => prev + 1);
  };

  const decreasePeople = () => {
    if (people > 1) {
      setPeople(prev => prev - 1);
    }
  };

  useEffect(() => {
    const numericAmount = Number(amount);

    const tip = numericAmount * (tipPercentage / 100);

    const total = numericAmount + tip;

    setTipAmount(tip);

    setTotalPerPerson(total / people);
  }, [amount, tipPercentage, people]);

  return {
    amount,
    people,
    tipPercentage,

    tipAmount,
    totalPerPerson,

    buildAmount,
    deleteLast,

    increasePeople,
    decreasePeople,

    setTipPercentage,
  };
};