import "../App.css"
import dayjs from 'dayjs'
import { Root } from '../Types/type'

type Props = {
    forecast: Root | null
}
function TodaysForecast({forecast}: Props): JSX.Element {
  return (
    <div>
      <div className="header-bash">
        <h1 className='h1-bash' >{forecast?.current.condition.text}</h1>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs().add(1, 'hour').format('HH:00')} </span>
          <hr />
          <img className='h-icon'  src={`${forecast?.forecast.forecastday[0].hour[9].condition.icon}`}/>
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour.find((hour: any) =>
           dayjs(hour.time).isSame(dayjs().startOf('hour').subtract(1, 'hour')))?.temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs().add(2, 'hour').format('HH:00')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[10].condition.icon}`} />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour.find((hour: any) =>
      dayjs(hour.time).isSame(dayjs().startOf('hour').subtract(2, 'hour')))?.temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs().add(3, 'hour').format('HH:00')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[11].condition.icon}`} />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour.find((hour: any) =>
      dayjs(hour.time).isSame(dayjs().startOf('hour').subtract(3, 'hour')))?.temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs().add(4, 'hour').format('HH:00')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[12].condition.icon}`} />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour.find((hour: any) =>
      dayjs(hour.time).isSame(dayjs().startOf('hour').subtract(4, 'hour')))?.temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs().add(5, 'hour').format('HH:00')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[13].condition.icon}`}  />
          <h3 className="h-gradus">{forecast?.forecast.forecastday[0].hour.find((hour: any) =>
      dayjs(hour.time).isSame(dayjs().startOf('hour').subtract(5, 'hour')))?.temp_c}℃</h3>
        </div>
        <div className="div5-header" >
          <span className="span-sagat" >{dayjs().add(6, 'hour').format('HH:00')}</span>
          <hr />
          <img className='h-icon' src={`${forecast?.forecast.forecastday[0].hour[14].condition.icon}`} />
          <h3 className="h-gradus"> {forecast?.forecast.forecastday[0].hour.find((hour: any) =>
      dayjs(hour.time).isSame(dayjs().startOf('hour').subtract(6, 'hour')))?.temp_c}℃</h3>
        </div>
      </div>
    </div>
  )
}

export default TodaysForecast
