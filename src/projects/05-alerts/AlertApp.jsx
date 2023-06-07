import Alert from "../../components/Alert";

export default function AlertApp() {    
  return (
    <div className="container mx-auto">
        <Alert type={"success"} message={"You are a superhero !"} />
        <Alert
            type={"info"}
            message={"Time triggered"}
            delay={true}
            delayTime={2000}
        />
    </div>
  )
}
