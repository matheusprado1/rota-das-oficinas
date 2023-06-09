import { useState } from 'react';
import Button from '../../Button/Button';
import { Container, Title, Section, Label, CheckboxLabel, Result } from './styles';

const Calculator = () => {
    const [products, setProducts] = useState([]); // Estado para armazenar os produtos
    const [customers, setCustomers] = useState([]); // Estado para armazenar os clientes
    const [splitCosts, setSplitCosts] = useState({}); // Estado para armazenar os custos divididos

    const handleProductChange = (index, field, value) => {
        // Função para atualizar os dados de um produto específico
        const updatedProducts = [...products];
        updatedProducts[index] = { ...updatedProducts[index], [field]: value };
        setProducts(updatedProducts);
    };

    const handleCustomerChange = (index, field, value) => {
        // Função para atualizar os dados de um cliente específico
        const updatedCustomers = [...customers];
        updatedCustomers[index] = { ...updatedCustomers[index], [field]: value };
        setCustomers(updatedCustomers);
    };

    const handleAddProduct = () => {
        // Função para adicionar um novo produto
        setProducts([...products, { id: `product-${products.length}`, name: '', price: 0 }]);
    };

    const handleAddCustomer = () => {
        // Função para adicionar um novo cliente
        setCustomers([...customers, { id: `customer-${customers.length}`, name: '', consumption: {}, consumptionSplit: {} }]);
    };

    const handleSplitBill = () => {
        // Função para dividir a conta entre os clientes
        const totalCost = products.reduce((total, product) => total + product.price, 0);
        const numCustomers = customers.length;

        if (totalCost === 0 || numCustomers === 0) {
            alert('Insira produtos e clientes antes de dividir a conta.'); // Alerta se não houver produtos ou clientes
            return;
        }

        const serviceRate = 0.1; // Taxa de serviço de 10%

        const newSplitCosts = {};

        customers.forEach(customer => {
            // Calcula os custos individuais para cada cliente
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
            newSplitCosts[customer.name] = customerCost + serviceCharge; // Armazena os custos divididos para cada cliente
        });

        setSplitCosts(newSplitCosts); // Atualiza os custos divididos
    };

    const handleResetBill = () => {
        // Função para redefinir a conta
        setProducts([]); // Limpa os produtos
        setCustomers([]); // Limpa os clientes
        setSplitCosts({}); // Limpa os custos divididos
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
                                    placeholder='quantidade'
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
