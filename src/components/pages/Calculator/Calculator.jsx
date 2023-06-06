import { useState } from 'react';
import Button from '../../Button/Button';
import { Container, Title, Section, Label, CheckboxLabel, Result } from './styles';

const Calculator = () => {
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [splitCosts, setSplitCosts] = useState({});

    const handleProductChange = (index, field, value) => {
        const updatedProducts = [...products];
        updatedProducts[index] = { ...updatedProducts[index], [field]: value };
        setProducts(updatedProducts);
    };

    const handleCustomerChange = (index, field, value) => {
        const updatedCustomers = [...customers];
        updatedCustomers[index] = { ...updatedCustomers[index], [field]: value };
        setCustomers(updatedCustomers);
    };

    const handleAddProduct = () => {
        setProducts([...products, { id: `product-${products.length}`, name: '', price: 0 }]);
    };

    const handleAddCustomer = () => {
        setCustomers([...customers, { id: `customer-${customers.length}`, name: '', consumption: {}, consumptionSplit: {} }]);
    };

    const handleSplitBill = () => {
        const totalCost = products.reduce((total, product) => total + product.price, 0);
        const numCustomers = customers.length;

        if (totalCost === 0 || numCustomers === 0) {
            alert('Please enter products and customers before splitting the bill.');
            return;
        }

        const serviceRate = 0.1; // 10% service rate

        const newSplitCosts = {};

        customers.forEach(customer => {
            const customerConsumption = customer.consumption;
            let customerCost = 0;

            Object.entries(customerConsumption).forEach(([productId, quantity]) => {
                const product = products.find(product => product.id === productId);
                if (product) {
                    const consumedByCustomers = customers.filter(c => c.consumption[productId] > 0);
                    const totalQuantity = consumedByCustomers.reduce((total, c) => total + c.consumption[productId], 0);
                    const splitQuantity = quantity / totalQuantity;
                    customerCost += product.price * splitQuantity;
                }
            });

            const serviceCharge = customerCost * serviceRate;
            newSplitCosts[customer.name] = customerCost + serviceCharge;
        });

        setSplitCosts(newSplitCosts);
    };

    const handleResetBill = () => {
        setProducts([]);
        setCustomers([]);
        setSplitCosts({});
    };

    return (
        <Container>
            <Title>Divisor de conta</Title>
            <Section>
                <h3>Produtos</h3>
                {products.map((product, index) => (
                    <div key={product.id}>
                        <Label>Nome do Produto:</Label>
                        <input
                            type="text"
                            value={product.name}
                            onChange={event => handleProductChange(index, 'name', event.target.value)}
                        />
                        <Label>Preço:</Label>
                        <input
                            type="number"
                            value={product.price}
                            onChange={event => handleProductChange(index, 'price', parseFloat(event.target.value))}
                        />
                    </div>
                ))}
                <Button onClick={handleAddProduct}>Adicionar Produto</Button>
            </Section>
            <div>
                <h3>Clientes</h3>
                {customers.map((customer, index) => (
                    <div key={customer.id}>
                        <label>Nome do cliente:</label>
                        <input
                            type="text"
                            value={customer.name}
                            onChange={event => handleCustomerChange(index, 'name', event.target.value)}
                        />
                        {products.map(product => (
                            <div key={`${customer.id}-${product.id}`}>
                                <Label>{product.name}:</Label>
                                <input
                                    type="number"
                                    value={customer.consumption[product.id] || ''}
                                    onChange={event =>
                                        handleCustomerChange(index, 'consumption', {
                                            ...customer.consumption,
                                            [product.id]: parseInt(event.target.value)
                                        })
                                    }
                                />
                                <CheckboxLabel>
                                    <input
                                        type="checkbox"
                                        checked={customer.consumptionSplit && customer.consumptionSplit[product.id]}
                                        onChange={event =>
                                            handleCustomerChange(index, 'consumptionSplit', {
                                                ...customer.consumptionSplit,
                                                [product.id]: event.target.checked
                                            })
                                        }
                                    />
                                    Dividir
                                </CheckboxLabel>
                            </div>
                        ))}
                    </div>
                ))}
                <Button onClick={handleAddCustomer}>Adicionar Cliente</Button>
            </div>
            <div>
                <Button onClick={handleSplitBill}>Dividir Conta</Button>
                <Button onClick={handleResetBill}>Resetar Conta</Button>
            </div>
            <div>
                <h3>Dividir Custos</h3>
                {Object.entries(splitCosts).map(([customerName, cost]) => (
                    <Result key={customerName}>
                        <span>{customerName}: </span>
                        <span>R$ {cost.toFixed(2)}</span>
                    </Result>
                ))}
            </div>
        </Container>
    );
};

export default Calculator;
