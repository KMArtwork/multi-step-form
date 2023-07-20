import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, Divider, Text, Link } from '@chakra-ui/react'
import AddOnSummary from "./AddOnSummary";

function Summary({changePlan}) {

  const state = useSelector(state => state.form);
  const [total, setTotal] = useState(0);

  const renderAddOns = () => {
    let addons = Object.entries(state.addons);
    return addons.map(addon => {
      if(addon[1].isAdded){
        return <AddOnSummary name={addon[0]} monthCost={addon[1].monthCost} isAnnualPlan={state.isAnnualPlan} />
      } else return null;
    })
  }

  const calculateTotal = () => {
    let addons = Object.entries(state.addons);
    let newTotal = 0;

    addons.forEach(addon => {
      if(addon[1].isAdded){
        if(state.isAnnualPlan){
          newTotal = newTotal + addon[1].monthCost * 10
        } else {
          newTotal = newTotal + addon[1].monthCost;
        }        
      }
    })

    if(state.isAnnualPlan){
      newTotal = newTotal + (state.plan.monthCost * 10);
    } else {
      newTotal = newTotal + state.plan.monthCost;
    }

    return newTotal;
  }

  useEffect(() => {
    let newTotal = calculateTotal();
    setTotal(newTotal);
  }, []) //eslint-disable-line

  useEffect(() => {
    let newTotal = calculateTotal();
    setTotal(newTotal);
  }, [state.addons]) //eslint-disable-line

  return(
    <div className='form-step-container'>
      <Card>
        <CardBody id='summary-card-body'>
          <div className="summary-row">
            <div>
              <Text className="bold">{`${state.plan.name} (${state.isAnnualPlan ? 'Yearly' : 'Monthly'})`}</Text>
              <Link onClick={changePlan}>Change</Link>
            </div>
            <Text className="bold">
              {state.isAnnualPlan ?
              `$${state.plan.monthCost * 10}/yr`
              :
              `$${state.plan.monthCost}/mo`
              }
            </Text>
          </div>
          <br/>
          <Divider />
          {renderAddOns()}
        </CardBody>
      </Card>
      <br/>
      <div className="summary-row" id='summary-total-cost-container' >
        <Text className="greyed">
          {
            state.isAnnualPlan ?
            'Total (per Year)'
            :
            'Total (per Month)'
          }
        </Text>

        <Text id='summary-grand-total' className="bold">
          {
            state.isAnnualPlan ?
            `$${total}/yr`
            :
            `$${total}/mo`
          }
        </Text>
      </div>

    </div>
  )

}

export default Summary;