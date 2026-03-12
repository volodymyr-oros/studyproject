<?php

declare(strict_types=1);

namespace Perspective\CartProductRating\ViewModel;

use Magento\Framework\View\Element\Block\ArgumentInterface;
use Magento\Review\Model\Review\SummaryFactory;
use Magento\Store\Model\StoreManagerInterface;

class ProductRating implements ArgumentInterface
{
    /**
     * @var SummaryFactory
     */
    private $reviewSummaryFactory;

    /**
     * @var StoreManagerInterface
     */
    private $storeManager;

    public function __construct(
        SummaryFactory $reviewSummaryFactory,
        StoreManagerInterface $storeManager
    ) {
        $this->reviewSummaryFactory = $reviewSummaryFactory;
        $this->storeManager = $storeManager;
    }

    /**
     * @param \Magento\Catalog\Model\Product $product
     * @return \Magento\Review\Model\Review\Summary|null
     */
    public function getReviewSummary($product)
    {
        $storeId = $this->storeManager->getStore()->getId();
        
        $summary = $this->reviewSummaryFactory->create()->load($product->getId());
        $summary->setStoreId($storeId);
        
        if (!$summary->getReviewsCount()) {
            return null;
        }

        return $summary;
    }
}