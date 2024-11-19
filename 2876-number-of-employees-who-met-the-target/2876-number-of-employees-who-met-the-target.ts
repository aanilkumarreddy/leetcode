function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {

      return hours.filter(i => i >= target).length


};