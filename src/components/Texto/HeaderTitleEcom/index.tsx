import { Grid } from "@mui/material";

interface MyHeaderProps {
    subhead: string;
    headline: string;
    id: string;
}

const index = ({ subhead, headline, id }: MyHeaderProps) => {
    return (
        <Grid container id={id} className="flex-col items-stretch justify-center py-[6%] sm:py-[40px]">
            <Grid xl={7} lg={7} md={8} xs={11} item className="text-center justify-center">
                <h1 className="text-xmd leading-[20px]  font-serif text-gradient bg-gradient-to-r from-[#008C72] via-[#02A676] to-[#01c778] mb-[15px]">
                    {subhead}
                </h1>
                <h2 className="text-darkgray mb-[0px] font-serif font-medium -tracking-[1px] xs:mb-[0px]">
                    {headline}
                </h2>
            </Grid>
        </Grid>
    )
}

export default index;