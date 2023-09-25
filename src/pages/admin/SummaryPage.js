import React from 'react';
import styled from 'styled-components';
import { Chart } from 'react-google-charts';

const Widget = () => {
  const totalSalesData = [
    ['Month', 'Total Sales'],
    ['January', 1000],
    ['February', 2000],
    ['March', 1500],
    ['April', 3000],
    ['May', 2500],
  ];

  const totalOrdersData = [
    ['Month', 'Total Orders'],
    ['January', 50],
    ['February', 60],
    ['March', 55],
    ['April', 70],
    ['May', 65],
  ];

  const transactionHistory = [
    {
      date: '2023-09-01',
      orderId: 'ORD12345',
      customer: 'John Doe',
      amount: 100,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },
    {
      date: '2023-09-02',
      orderId: 'ORD12346',
      customer: 'Jane Smith',
      amount: 150,
    },

    // Add more transaction history entries
  ];

  return (
    <StyledWidget>
      <Header>
        <Icon color="blue" bgcolor="yellow">
          💰
        </Icon>
        <Text>
          <h3>Total Sales</h3>
          <p>Total sales over time</p>
        </Text>
      </Header>
      <Content>
        <ChartContainer>
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={totalSalesData}
            options={{
              title: 'Total Sales Over Time',
              hAxis: {
                title: 'Month',
                titleTextStyle: {
                  color: '#333',
                },
              },
              vAxis: {
                title: 'Total Sales',
                titleTextStyle: {
                  color: '#333',
                },
                minValue: 0,
              },
              legend: { position: 'top' },
              areaOpacity: 0.7,
              backgroundColor: {
                fill: 'linear-gradient(180deg, #f5f5f5 0%, #fff 100%)', // Gradient background
              },
              colors: ['#2196F3'], // Custom chart line color
              fontName: 'Roboto',
              chartArea: {
                width: '80%',
                height: '70%',
              },
              animation: {
                startup: true,
                easing: 'bounceIn', // Bounce-in animation
                duration: 1500, // Longer animation duration
              },
              tooltip: {
                textStyle: {
                  color: '#333',
                },
                showColorCode: true, // Display data values in the tooltip
              },
            }}
          />
        </ChartContainer>
      </Content>

      <Header>
        <Icon color="green" bgcolor="lightblue">
          📦
        </Icon>
        <Text>
          <h3>Total Orders</h3>
          <p>Total orders over time</p>
        </Text>
      </Header>
      <Content>
        <ChartContainer>
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={totalOrdersData}
            options={{
              title: 'Total Orders Over Time',
              hAxis: {
                title: 'Month',
                titleTextStyle: {
                  color: '#333',
                },
              },
              vAxis: {
                title: 'Total Orders',
                titleTextStyle: {
                  color: '#333',
                },
                minValue: 0,
              },
              legend: { position: 'top' },
              areaOpacity: 0.7,
              backgroundColor: {
                fill: 'linear-gradient(180deg, #f5f5f5 0%, #fff 100%)', // Gradient background
              },
              colors: ['#4CAF50'], // Custom chart line color
              fontName: 'Roboto',
              chartArea: {
                width: '80%',
                height: '70%',
              },
              animation: {
                startup: true,
                easing: 'bounceIn', // Bounce-in animation
                duration: 1500, // Longer animation duration
              },
              tooltip: {
                textStyle: {
                  color: '#333',
                },
                showColorCode: true, // Display data values in the tooltip
              },
            }}
          />
        </ChartContainer>
      </Content>

      <TransactionHistory>
        <h3>Transaction History</h3>
        <CustomTransactionTable>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.orderId}</td>
                <td>{transaction.customer}</td>
                <td>${transaction.amount.toFixed(2)}</td> {/* Format amount as currency */}
              </tr>
            ))}
          </tbody>
        </CustomTransactionTable>
      </TransactionHistory>
    </StyledWidget>
  );
};

export default Widget;

const StyledWidget = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 20px;
  background-color: #f5f5f5;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const Icon = styled.div`
  margin-right: 20px;
  padding: 15px;
  color: ${({ color }) => color};
  background: ${({ bgcolor }) => bgcolor};
  border-radius: 50%;
  font-size: 36px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Text = styled.div`
  text-align: center;
  h3 {
    font-weight: 900;
    margin: 0;
    font-size: 24px;
  }
  p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    margin: 8px 0;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ChartContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const TransactionHistory = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;
  h3 {
    font-size: 20px;
    margin: 0;
  }
`;

const CustomTransactionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
    background-color: #f5f5f5; /* Background color for table cells */
  }
  th {
    background-color: #4CAF50; /* Header background color */
    color: white; /* Header text color */
  }
  tbody tr:nth-child(odd) {
    background-color: #f2f2f2; /* Alternate row background color */
  }
  tbody tr:hover {
    background-color: #ddd; /* Hovered row background color */
  }
`;
