C/C++


void mergeSort(vector<int> &nums, int left, int right) {
	if (left >= right) return;
	
	int mid = left + (right - left) / 2;
	mergeSort(nums, left, mid);
	mergeSort(nums, mid+1, right);
	
	merge(nums, left, mid, right);
}




void merge(vector<int> &nums, int left, int mid, int right) {
	vector<int> tmp(right-left+1);
	int i = left, j = mid+1, k = 0;
	
	while (i <= mid && j <= right) {
		tmp[k++] = nums[i] < nums[j] ? nums[i++] : nums[j++];
	}
	while (i <= mid) tmp[k++] = nums[i++];
	while (j <= right) tmp[k++] = nums[j++];
	
	for (i = left, k = 0; i <= right;) nums[i++] = tmp[k++];
}


