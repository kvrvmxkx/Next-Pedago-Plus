"use client"

import React, { useState, useRef } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import Type from "@/components/admin/courses/type";
import Informations from "@/components/admin/courses/informations";
import structure from "@/components/admin/courses/structure";



type ComponentConfiguration =
  { 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      component: React.ForwardRefExoticComponent<any>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      props: Record<string, any>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: React.Ref<any>
  }

const Add = () => {
  
  const steps = ["Type", "Informations", "Structure"];
  const [currentStep, setCurrentStep] = useState(3);
  const [complete, setComplete] = useState(false);

  const [selectedType, setSelectedType] = useState("")
  const [informationsData, setInformationsData] = useState({
    title: "",
    description: "",
    category: "",
    price: ""
  })
  const [informationsFormIsValid, setInformationsFormIsValid] = useState(false)


  const validateButton = useRef<HTMLButtonElement>(null);

  const components: ComponentConfiguration[] = [
    { 
      component: Type, 
      props: { selectedType, setSelectedType },
      ref: null
    },
    {
      component: Informations, 
      props: { informationsData, setInformationsData, setInformationsFormIsValid },
      ref: validateButton
    },
    { 
      component: structure, 
      props: {},
      ref: null
    },
  ];


  const { component: SelectedComponent, props, ref } = components[currentStep - 1];

  const handleNextStep = () => {
    if(SelectedComponent === Informations) {
      validateButton.current?.click();
      if(!informationsFormIsValid) return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  }
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold text-primary my-5">Add course</h1>

        <div className="flex w-full justify-center mb-20">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step text-xs">
                {i + 1 < currentStep || complete ? <TiTick size={18} /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>

        <SelectedComponent {...props} ref={ref} />
      </div>
  
      {!complete && (
        <div className="flex justify-between mt-5">
          <button
            disabled={currentStep === 1}
            className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md text-sm font-medium transition-all h-fit px-4 py-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              currentStep > 1
                && setCurrentStep((prev) => prev - 1)
            }}
          >
            Back
          </button>

          <button
            className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md text-sm font-medium transition-all h-fit px-4 py-2 disabled:pointer-events-none disabled:opacity-50"
            onClick={handleNextStep}
          >
            {currentStep === steps.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Add;