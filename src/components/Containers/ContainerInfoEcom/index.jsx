import { Container, Grid } from "@mui/material";

const index = () => {
    return (
        <section className="py-[6%] sm:py-[50px]">
                <Grid container justifyContent="center" spacing={3} className="justify-center">

                    <Grid item xs={12} sm={6} md={3} className="md:mb-[30px] xs:mb-[25px] justify-center">
                        <div className="flex items-center justify-center">
                            <div className="flex mr-[30px] leading-0 lg:mr-[25px]">
                                <i className="feather-truck text-[32px] font-medium text-[#b7b7b7]"></i>
                            </div>
                            <div className="feature-box-content leading-[22px]">
                                <div className="text-darkgray text-xmd font-medium leading-[20px] mb-[5px]">Free delivery</div>
                                <span>Contact support team</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="md:mb-[30px] xs:mb-[25px] justify-center">
                        <div className="flex items-center justify-center">
                            <div className="flex mr-[30px] leading-0 lg:mr-[25px]">
                                <i className="feather-rotate-cw text-[32px] font-medium text-[#b7b7b7]"></i>
                            </div>
                            <div className="feature-box-content leading-[22px]">
                                <div className="text-darkgray text-xmd font-medium leading-[20px] mb-[5px]">90 days return</div>
                                <span>Safe and trustworthy</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} className="xs:mb-[25px] justify-center">
                        <div className="flex items-center justify-center">
                            <div className="flex mr-[30px] leading-0 lg:mr-[25px]">
                                <i className="feather-check-square text-[32px] font-medium text-[#b7b7b7]"></i>
                            </div>
                            <div className="feature-box-content leading-[22px]">
                                <div className="text-darkgray text-xmd font-medium leading-[20px] mb-[5px]">Secure payment</div>
                                <span>Leading travel agency</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="flex items-center justify-center">
                            <div className="flex mr-[30px] leading-0 lg:mr-[25px]">
                                <i className="feather-headphones text-[32px] font-medium text-[#b7b7b7]"></i>
                            </div>
                            <div className="feature-box-content leading-[22px]">
                                <div className="text-darkgray text-xmd font-medium leading-[20px] mb-[5px]">Expert support</div>
                                <span>Best price guarantee</span>
                            </div>
                        </div>
                    </Grid>

                </Grid>
        </section>
    )
}

export default index;