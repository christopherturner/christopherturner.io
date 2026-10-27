export interface ContributionItem {
    name: string;
    tag?: string;
    description: string;
    url: string;
    logoSrc: string;
}

export const contributions: ContributionItem[] = [
    {
        name: "can-scrapers",
        description: "COVID-19 data scrapers for US health departments",
        url: "https://github.com/act-now-coalition/can-scrapers",
        logoSrc: "/covidactnow.png",
    },
];
