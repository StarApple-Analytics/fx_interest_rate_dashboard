import { createChart, isBusinessDay } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export const ChartComponent = (props) => {
  const chartContainerRef = useRef();
  const switcherContainer = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const { monthly, threeMonthly, sixMonthly } = props;

    function createSimpleSwitcher(
      items,
      activeItem,
      activeItemChangedCallback
    ) {
      var switcherElement = document.createElement("div");
      switcherElement.classList.add("switcher");
      switcherElement.setAttribute("id", "switch-element");

      var intervalElements = items.map(function (item) {
        var itemEl = document.createElement("button");
        itemEl.innerText = item;
        itemEl.classList.add("switcher-item");
        itemEl.classList.toggle("switcher-active-item", item === activeItem);
        itemEl.addEventListener("click", function () {
          onItemClicked(item);
        });
        switcherElement.appendChild(itemEl);
        return itemEl;
      });

      function onItemClicked(item) {
        if (item === activeItem) {
          return;
        }

        intervalElements.forEach(function (element, index) {
          element.classList.toggle(
            "switcher-active-item",
            items[index] === item
          );
        });

        activeItem = item;

        activeItemChangedCallback(item);
      }

      return switcherElement;
    }

    var intervals = ["1M", "3M", "6M"];
    var seriesesData = new Map([
      ["1M", monthly],
      ["3M", threeMonthly],
      ["6M", sixMonthly],
    ]);

    var switcherElement = createSimpleSwitcher(
      intervals,
      intervals[0],
      syncToInterval
    );

    if (switcherContainer.current.contains(switcherElement)) {
      switcherElement.remove();
    } else {
      switcherContainer.current.appendChild(switcherElement);
    }

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 300,
      watermark: {
        visible: true,
        fontSize: 48,
        horzAlign: "center",
        vertAlign: "center",
        color: "#c2ead8",
        text: "Consumer Price Index (CPI)",
      },
      crosshair: {
        vertLine: {
          width: 5,
          color: "#c5e6d9",
          style: 0,
        },
        horzLine: {
          visible: false,
          labelVisible: false,
        },
      },
    });
    chart.timeScale().fitContent();

    var newSeries = null;
    function syncToInterval(interval) {
      if (newSeries) {
        chart.removeSeries(newSeries);
        newSeries = null;
      }
      newSeries = chart.addAreaSeries({ crossHairMarkerVisible: true });

      newSeries.setData(seriesesData.get(interval));
    }

    const legend = document.createElement("div");
    legend.classList.add("legend");
    chartContainerRef.current.appendChild(legend);

    var firstRow = document.createElement("div");
    firstRow.innerText = "JA CPI";
    firstRow.style.color = "black";
    legend.appendChild(firstRow);

    function businessDayToString(businessDay) {
      return businessDay.year + "-" + businessDay.month + "-" + businessDay.day;
    }

    var width = 600;
    var height = 400;
    var toolTipWidth = 100;
    var toolTipHeight = 80;
    var toolTipMargin = 15;

    var toolTip = document.createElement("div");
    toolTip.className = "floating-tooltip-2";
    chartContainerRef.current.appendChild(toolTip);

    chart.subscribeCrosshairMove((param) => {
      if (param.time) {
        const price = param.seriesPrices.get(newSeries);
        firstRow.innerText = "JA CPI" + "  " + price.toFixed(2);
      } else {
        firstRow.innerText = "JA CPI";
      }
      if (
        !param.time ||
        param.point.x < 0 ||
        param.point.x > width ||
        param.point.y < 0 ||
        param.point.y > height
      ) {
        toolTip.style.display = "none";
        return;
      }

      var dateStr = isBusinessDay(param.time)
        ? businessDayToString(param.time)
        : new Date(param.time * 1000).toLocaleDateString();

      toolTip.style.display = "block";
      var price = param.seriesPrices.get(newSeries);
      toolTip.innerHTML =
        '<div className="text-red font-light" >Jamaica CPI</div>' +
        '<div style="font-size: 24px; margin: 4px 0px">' +
        Math.round(price * 100) / 100 +
        "</div>" +
        "<div>" +
        dateStr +
        "</div>";

      var y = param.point.y;

      var left = param.point.x + toolTipMargin;
      if (left > width - toolTipWidth) {
        left = param.point.x - toolTipMargin - toolTipWidth;
      }

      var top = y + toolTipMargin;
      if (top > height - toolTipHeight) {
        top = y - toolTipHeight - toolTipMargin;
      }

      toolTip.style.left = left + "px";
      toolTip.style.top = top + "px";
    });

    syncToInterval(intervals[0]);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);

      switcherElement.remove();
      chart.remove();
      legend.remove();
      toolTip.remove();
    };
  }, [props]);

  return (
    <div className="flex flex-col gap-2">
      <div className="relative" ref={chartContainerRef} />
      <div className="" ref={switcherContainer} />
    </div>
  );
};
