
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import { previousLocalStorage } from '../../utilities/LocalStorage';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const pre = previousLocalStorage();
    const details = useLoaderData()
    const data = [
        { name: 'Group A', value: details.length },
        { name: 'Group B', value: pre.length },
    ];
    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className='text-2xl font-semibold' x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className='container mx-auto'>
                <div className='h-[70vh] flex justify-center items-center'>
                    <ResponsiveContainer width="100%" height={500}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={190}
                                fill="#8884d8"
                                dataKey="value"
                                label={renderCustomizedLabel}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='container text-center mx-auto md:flex justify-center -mt-10 gap-16'>
                <h2 className='text-xl mb-2'>Your Donation <span className='bg-[#00C49F] px-10 -p-3   ml-2'></span></h2>
                <h2 className='text-xl'>Total Donation <span className='bg-[#FF444A] px-10 -p-3 ml-2'></span></h2>
            </div>
        </div>
    );
};

export default Statistics;




