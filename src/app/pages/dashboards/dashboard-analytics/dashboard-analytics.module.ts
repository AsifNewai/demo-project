import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAnalyticsRoutingModule } from './dashboard-analytics-routing.module';
import { DashboardAnalyticsComponent } from './dashboard-analytics.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { ChartModule } from 'src/@vex/components/chart/chart.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { WidgetAssistantModule } from 'src/@vex/components/widgets/widget-assistant/widget-assistant.module';
import { WidgetLargeChartModule } from 'src/@vex/components/widgets/widget-large-chart/widget-large-chart.module';
import { WidgetLargeGoalChartModule } from 'src/@vex/components/widgets/widget-large-goal-chart/widget-large-goal-chart.module';
import { WidgetQuickLineChartModule } from 'src/@vex/components/widgets/widget-quick-line-chart/widget-quick-line-chart.module';
import { WidgetQuickValueCenterModule } from 'src/@vex/components/widgets/widget-quick-value-center/widget-quick-value-center.module';
import { WidgetQuickValueStartModule } from 'src/@vex/components/widgets/widget-quick-value-start/widget-quick-value-start.module';
import { WidgetTableModule } from 'src/@vex/components/widgets/widget-table/widget-table.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table'  
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    DashboardAnalyticsComponent
  ],
  imports: [
    CommonModule,
    DashboardAnalyticsRoutingModule,
    ChartModule,
    MatIconModule,
    WidgetQuickLineChartModule,
    WidgetQuickValueCenterModule,
    WidgetQuickValueStartModule,
    WidgetLargeGoalChartModule,
    WidgetAssistantModule,
    WidgetLargeChartModule,
    WidgetTableModule,
    SecondaryToolbarModule,
    BreadcrumbsModule,
    MatButtonModule,
    PageLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    IconModule,
    FlexLayoutModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class DashboardAnalyticsModule { }
