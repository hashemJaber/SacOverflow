// interface

// SalesTrendWidget (Bottom Line Charts) props
export interface SalesOverviewData {
    total: number;
    previousTotal: number;
    data: DoubleLineChartDataElement[];
}

export interface CategorySalesData {
    category: string;
    total: number;
    data: SingleLineChartDataElement[];
}

// SingleLineChart props
export interface SingleLineChartDataElement {
    // date key but value is a date of format yyyy-MM-dd
    date: string;
    value: number;
}
// DoubleLineChart props
export interface DoubleLineChartDataElement extends SingleLineChartDataElement {
    value2: number;
}
