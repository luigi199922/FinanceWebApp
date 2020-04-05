import React from "react";
import Chart from "react-apexcharts";
import { formatAPIRequest } from "../../shared/functions";
import Button from "../../components/UI/Button/Button"
import Input from "../../components/UI/Input/Input"

export default class StockChart extends React.Component {
  componentDidMount() {
    const data = formatAPIRequest("AAPL", "15", "1572651390", "1572910590");
    data
      .then((data) => this.setState({ loading: false, data: data }))
      .catch((error) => this.setState({ error: error}));
  }
  state = {
    loading: true,
    error: null,
    data: [],
    inputForm: {
        ticker: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Ticker Symbol'
            },
            value: '',
            label: 'Ticker',
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touched: false
        },
        startDate: {
            elementType: 'input',
            elementConfig: {
                type: 'date',
                placeholder: 'Start Date'
            },
            value: '',
            label: 'Start Date',
            validation: {
                required: true,
                minLength: 6,
            },
            valid: false,
            touched: false
        },
        endDate: {
            elementType: 'input',
            elementConfig: {
                type: 'date',
                placeholder: 'End Date'
            },
            value: '',
            label: 'End Date',
            validation: {
                required: true,
                minLength: 6,
            },
            valid: false,
            touched: false
        },
        timeFrame: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: '1', displayValue: '1'},
                    {value: '5', displayValue: '5'},
                    {value: '15', displayValue: '15'},
                    {value: '30', displayValue: '30'},
                    {value: '60', displayValue: '60'},
                    {value: 'D', displayValue: 'D'},
                    {value: 'W', displayValue: 'W'},
                    {value: 'M', displayValue: 'M'},
                ]
            },
            value: '30',
            validation: {
                required: true
            },

           
        },

    },
}
  render() {
    const options = {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "AAPL",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };
    let customChart = null;
    if (!this.state.loading ) {
        console.log(this.state.data)
        const final = [
            {
                data : this.state.data
            }
        ]  
        customChart = <Chart
          options={options}
          series={final}
          type="candlestick"
          height={350}
        />
    }

    const formElementsArray= []
    for(let key in this.state.inputForm){
        formElementsArray.push({
            id: key,
            config: this.state.inputForm[key]
        })
    }

    let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map((formElement, key) =>{
                    return <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        value={formElement.config.value} 
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                })}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
                <Button btnType="Danger" clicked={this.cancelHandler}>CANCEL</Button>
            </form>
    )

    return (
      <div>
        {form}
        {customChart}
      </div>
    );
  }
}
