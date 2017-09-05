/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import { Component } from '../../decorators';
import { FsData, ChartResponse } from '../../services/FsData.service';
import './single-value.styles.scss';

@Component({
  template: `
    <h3
      ng-bind="vm.title"
      ng-click="swap()"
    ></h3>
    <span class="__fs-single-value-value" ng-bind="vm.value"></span>
  `,
  bindings: {
    title: '@',
    type: '@',
    segment: '@'
  },
  controllerAs: 'vm',
})
export class SingleValueWidget {
  
  private type: string;
  private segment: string = 'all_data';
  private value: any;

  constructor (private $scope: angular.IScope, private FsData: FsData) { 

  }

  async $onInit() {
    this.value = await this.FsData.getSingleValue(this.type, this.segment, '', '');
    this.$scope.$apply();
  }

}