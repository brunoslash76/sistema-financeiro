'use client'

import { InnerCard } from "@/components/atoms/inner-card/InnerCard";
import { Card } from "@/components/moleculas/card/Card";
import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement)

const data = [
  {
    label: 'Fundos de Investimento',
    id: 1,
    value: 10,
    cutout: "0%",
    color: '#2567F9'
  },
  {
    label: 'Tesouro Direto',
    id: 2,
    value: 20,
    cutout: "0%",
    color: '#8F3CFF'
  },
  {
    label: 'Previdência Privada',
    id: 3,
    value: 5,
    cutout: "0%",
    color: '#FF3C82',
  },
  {
    label: 'Bolsa de Valores',
    id: 4,
    value: 15,
    cutout: "0%",
    color: '#F1823D',
  },
]

const options = {
  plugins: {
    responsive: true
  },
  cutout: data.map(item => item.cutout)
}

const finalData = {
  labels: data.map(item => item.label),
  datasets: [
    {
      data: data.map(item => Math.round(item.value)),
      backgroundColor: data.map(item => item.color),
      boderColor: data.map(item => item.color),
      borderWidth: 0,
      dataVisibility: new Array(data.length).fill(true),
      borderRadius: 5,
    }
  ]
}

export function InvestimentsCard() {
  return (
    <Card>
      <header className="mb-4">
        <h2 className="text-lg font-semibold text-black">Investimentos</h2>
      </header>
      <section className="mb-8">
        <h3 className="mb-8 text-lg">Total: R$ 50.000,00</h3>
        <div className="flex gap-4">
          <InnerCard>
            <p className="text-white text-sm mb-2">Renda Fixa</p>
            <p className="text-white text-lg font-semibold">R$ 36,000.00</p>
          </InnerCard>

          <InnerCard>
            <p className="text-white text-sm mb-2">Renda Fix</p>
            <p className="text-white text-lg font-semibold">R$ 14,000.00</p>
          </InnerCard>
        </div>
      </section>
      <section>
        <h3 className="text-black mb-4">Estatísticas</h3>
        <InnerCard>
          <div className="flex items-center gap-10">
            <div className="max-w-[50%]">
              <Doughnut data={finalData} options={{
                responsive: true,
                maintainAspectRatio: true,
                cutout: '70%',
              }}/>
            </div>
            <div>
              {data.map(item => (
                <div key={item.id} className="flex items-center gap-4 mb-2 last-of-type:mb-0">
                  <div className={`min-h-[12px] min-w-[12px] rounded-full`} style={{backgroundColor: item.color}}/>
                  <p className="text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </InnerCard>
      </section>
    </Card>
  )
}
