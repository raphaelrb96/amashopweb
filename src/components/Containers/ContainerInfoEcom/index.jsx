import { Container, Grid } from "@mui/material";

const index = () => {
    return (
        <Container className="py-[6%] sm:py-[50px] px-6">
                <Grid container justifyContent="start" spacing={3} className="justify-start">

                    <Grid item xs={12} sm={6} md={3} className="md:mb-[30px] xs:mb-[25px] justify-center">
                        <div className="flex items-start justify-start">
                            <div className="flex mr-[30px] leading-0 lg:mr-[25px]">
                                <i className="feather-truck text-[32px] font-medium text-[#b7b7b7]"></i>
                            </div>
                            <div className="feature-box-content leading-[18px]">
                                <div className="text-darkgray text-xmd font-medium leading-[20px] mb-[5px]">Entrega Rápida</div>
                                <span>Receba seus produtos com rapidez. Nosso serviço de entrega é eficiante e seguro</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="md:mb-[30px] xs:mb-[25px] justify-center">
                        <div className="flex items-start justify-start">
                            <div className="flex mr-[30px] leading-0 lg:mr-[25px]">
                                <i className="feather-rotate-cw text-[32px] font-medium text-[#b7b7b7]"></i>
                            </div>
                            <div className="feature-box-content leading-[18px]">
                                <div className="text-darkgray text-xmd font-medium leading-[20px] mb-[5px]">Compromisso com a Satisfação</div>
                                <span>Sua satisfação é nosso compromisso. Sua felicidade é nossa prioridade</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="xs:mb-[25px] justify-center">
                        <div className="flex items-start justify-start">
                            <div className="flex mr-[30px] leading-0 lg:mr-[25px]">
                                <i className="feather-check-square text-[32px] font-medium text-[#b7b7b7]"></i>
                            </div>
                            <div className="feature-box-content leading-[18px]">
                                <div className="text-darkgray text-xmd font-medium leading-[20px] mb-[5px]">Pagamento Seguro</div>
                                <span>Utilizamos os mais altos padrões em tecnologia de segurança nos pagamentos onlines</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="flex items-start justify-start">
                            <div className="flex mr-[30px] leading-0 lg:mr-[25px]">
                                <i className="feather-headphones text-[32px] font-medium text-[#b7b7b7]"></i>
                            </div>
                            <div className="feature-box-content leading-[18px]">
                                <div className="text-darkgray text-xmd font-medium leading-[20px] mb-[5px]">Atendimento Excepcional</div>
                                <span>Nosso time está online 24 horas para ajudar e garantir sua completa satisfação </span>
                            </div>
                        </div>
                    </Grid>

                </Grid>
        </Container>
    )
}

export default index;