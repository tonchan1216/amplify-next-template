"use client";

import { useState } from "react";
// import Form from 'next/form';
import { Button, Input, Flex, SliderField } from "@aws-amplify/ui-react"

export default function SimlationForm() {
  const [formData, setFormData] = useState({
    propertyPrice: 0,
    purchaseCost: 0,
    loanAmount: 0,
    downPayment: 0,
    financingFee: 0.4,
    interestRate: 1.5,
    simulationYears: 35,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange", e);
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Simulating cash flow with: ", formData);
  // };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Input</h2>
      {/* <Form action={handleSubmit} className="space-y-3"> */}
        <Flex gap="12px" direction="column" justifyContent="flex-start" alignItems="flex-start" alignSelf="stretch">
          <Input name="propertyPrice" type="number" placeholder="物件価格" onChange={handleChange} />
          <Input name="purchaseCost" type="number" placeholder="購入時の諸費用" onChange={handleChange} />
          <Input name="loanAmount" type="number" placeholder="借入額" onChange={handleChange} />
          <Input name="downPayment" type="number" placeholder="頭金" onChange={handleChange} />
          <SliderField 
            name="financingFee" 
            type="number" 
            label="融資手数料" 
            min={0} max={10} step={0.1} 
            defaultValue={0.4} 
            onChange={(v) => setFormData({...formData, financingFee: v})}
            formatValue={(v) => `${v} %`}
          />
          <SliderField 
            name="interestRate" 
            type="number" 
            label="金利" 
            min={0} max={10} step={0.1} 
            defaultValue={1.5} 
            onChange={(v) => setFormData({...formData, interestRate: v})}
            formatValue={(v) => `${v} %`}
          />
          <SliderField 
            name="simulationYears" 
            type="number" 
            label="シミュレーション期間" 
            min={1} max={30} step={1} 
            defaultValue={35} 
            onChange={(v) => setFormData({...formData, simulationYears: v})}
            formatValue={(v) => `${v} 年`}
          />
          <Button type="submit" variation="primary">シミュレーション開始</Button>
        </Flex>
      {/* </Form> */}
    </div>
  );
}
